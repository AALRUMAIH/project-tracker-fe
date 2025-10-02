<template>
  <div class="space-y-6">
    <!-- Loading -->
    <div v-if="loading" class="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm">
      <p class="text-gray-600">Generating AI report…</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="border border-red-200 bg-red-50 rounded-2xl p-5 text-red-700">
      ⚠️ {{ error }}
    </div>

    <!-- Report -->
    <div v-else-if="data" class="border border-gray-100 bg-white rounded-2xl p-6 shadow-sm">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800">
          AI Project Health — {{ projectName }}
        </h3>
        <div class="flex gap-2">
          <span class="px-3 py-1 text-xs rounded-full border border-gray-200 bg-gray-50">
            Forecast: {{ data.prediction.forecastEndDate }}
          </span>
          <span
            class="px-3 py-1 text-xs rounded-full border"
            :class="data.prediction.scopeCreep
              ? 'bg-red-50 text-red-700 border-red-200'
              : 'bg-emerald-50 text-emerald-700 border-emerald-200'"
          >
            Scope Creep: {{ data.prediction.scopeCreep ? 'Yes' : 'No' }}
          </span>
          <span class="px-3 py-1 text-xs rounded-full bg-gray-50 border border-gray-200 text-gray-800">
            Risk: {{ data.prediction.riskScore }}
          </span>
        </div>
      </div>

      <!-- Charts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center w-full">
        <!-- On-time Probability -->
        <div class="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col items-center w-60">
          <h4 class="text-sm font-medium text-gray-700 mb-2">On-Time Probability</h4>
          <Doughnut
            :data="onTimeChartData"
            :options="onTimeOptions"
            :plugins="[onTimeCenterText]"
            class="h-56 w-56"
          />
          <p class="mt-2 text-lg font-bold text-gray-800 md:hidden">{{ onTimePercent }}%</p>
        </div>

        <!-- Features Completed -->
        <div class="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col items-center w-60">
          <h4 class="text-sm font-medium text-gray-700 mb-2">Features Completed</h4>
          <Doughnut
            :data="featuresChartData"
            :options="featuresOptions"
            :plugins="[featuresCenterText]"
            class="h-56 w-56"
          />
          <!-- Legend -->
          <div class="mt-3 flex items-center gap-4 text-sm">
            <span class="inline-flex items-center gap-2 text-gray-700">
              <span class="w-3 h-3 rounded-full" style="background:#10b981"></span> Completed
            </span>
            <span class="inline-flex items-center gap-2 text-gray-700">
              <span class="w-3 h-3 rounded-full bg-gray-300"></span> Remaining
            </span>
          </div>
          <p class="mt-2 text-lg font-bold text-gray-800 md:hidden">
            {{ featuresCompletedSafe }}/{{ featuresTotalSafe }}
          </p>
        </div>
      </div>

      <!-- Recommendations (styled cards) -->
      <div class="mt-6 border-t border-gray-100 pt-4">
        <h4 class="font-semibold text-gray-800 mb-3">Recommended Actions</h4>

        <div v-if="recommendations.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <div
            v-for="(item, idx) in recommendations"
            :key="idx"
            class="p-3 rounded-xl border border-gray-200 bg-gray-50 flex items-start gap-3 hover:bg-white transition"
          >
            <!-- Colored dot -->
            <div
              class="w-2.5 h-2.5 rounded-full mt-2"
              :class="idx % 3 === 0 ? 'bg-indigo-500'
                    : idx % 3 === 1 ? 'bg-green-500'
                    : 'bg-yellow-500'"
            ></div>

            <!-- Action text (bold markdown converted) -->
            <p class="text-sm text-gray-700 leading-snug" v-html="formatAction(recommendationText(item))"></p>
          </div>
        </div>

        <div v-else class="text-sm text-gray-500">
          No recommendations returned by AI.
        </div>
      </div>
    </div>

    <!-- Empty -->
    <div v-else class="border border-gray-100 bg-white rounded-2xl p-6 text-center text-gray-600">
      <p>No AI report yet. Click <span class="font-semibold">Generate AI</span> to create it.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineExpose } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import api from '@/services/api'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

/* ---------- Props ---------- */
const props = defineProps({
  projectId: { type: Number, required: true },
  projectName: { type: String, required: true },
  plannedEnd: { type: String, required: true },
  // counts passed from Project Details
  featuresCompleted: { type: Number, default: null },
  featuresTotal: { type: Number, default: null }
})

/* ---------- State ---------- */
const loading = ref(false)
const error = ref(null)
const data = ref(null)

/* ---------- On-time % ---------- */
const onTimePercent = computed(() =>
  Math.round((data.value?.prediction.onTimeProbability ?? 0) * 100)
)

const onTimeChartData = computed(() => ({
  labels: ['On Time', 'At Risk'],
  datasets: [
    {
      data: [onTimePercent.value, 100 - onTimePercent.value],
      backgroundColor: ['#3b82f6', '#e5e7eb'],
      borderWidth: 0
    }
  ]
}))

const onTimeOptions = {
  responsive: true,
  plugins: { legend: { display: false }, tooltip: { enabled: true } },
  cutout: '72%'
}

/* Center text plugin for on-time donut */
const onTimeCenterText = {
  id: 'onTimeCenterText',
  afterDraw(chart) {
    const { ctx, chartArea } = chart
    drawCenterText(ctx, chartArea, `${onTimePercent.value}%`)
  }
}

/* ---------- Features donut ---------- */
const featuresCompletedSafe = computed(() => {
  const p = props.featuresCompleted
  if (typeof p === 'number' && !Number.isNaN(p)) return Math.max(0, p)
  // fallback parse from markdown if needed
  const md = data.value?.reportMarkdown || ''
  const match =
    md.match(/Features:\s*(\d+)\s*completed/i) ||
    md.match(/\*\*Features\*\*:\s*(\d+)\s*completed/i)
  return match ? Number(match[1]) : 0
})

const featuresTotalSafe = computed(() => {
  const p = props.featuresTotal
  if (typeof p === 'number' && !Number.isNaN(p)) return Math.max(0, p)
  // avoid 0/0 – show at least 1 when only completed is known
  return Math.max(featuresCompletedSafe.value, 1)
})

const featuresChartData = computed(() => ({
  labels: ['Completed', 'Remaining'],
  datasets: [
    {
      data: [
        featuresCompletedSafe.value,
        Math.max(featuresTotalSafe.value - featuresCompletedSafe.value, 0)
      ],
      backgroundColor: ['#10b981', '#e5e7eb'],
      borderWidth: 0
    }
  ]
}))

const featuresOptions = {
  responsive: true,
  plugins: { legend: { display: false }, tooltip: { enabled: true } },
  cutout: '72%'
}

/* Center text plugin for features donut */
const featuresCenterText = {
  id: 'featuresCenterText',
  afterDraw(chart) {
    const { ctx, chartArea } = chart
    drawCenterText(ctx, chartArea, `${featuresCompletedSafe.value}/${featuresTotalSafe.value}`)
  }
}

/* ---------- Common helpers ---------- */
function drawCenterText(ctx, area, text) {
  const x = (area.left + area.right) / 2
  const y = (area.top + area.bottom) / 2 + 6
  ctx.save()
  ctx.font = '700 16px Inter, ui-sans-serif, system-ui'
  ctx.fillStyle = '#111827'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, x, y)
  ctx.restore()
}

/* ---------- Recommendations ---------- */
const MIN_RECS = 8

const recommendations = computed(() => {
  const md = data.value?.reportMarkdown || ''

  // 1) Extract "Recommended Actions" section if present
  const rxSection = /##+\s*Recommended Actions[\s\S]*?(?=\n##\s|\n---|\n___|\n\*\*\*|$)/i
  const section = (md.match(rxSection)?.[0] || md).trim()

  // 2) Bullets: -, *, •, or numbered (1.)
  let aiBullets = section
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(s => /^[-*•]\s+/.test(s) || /^\d+\.\s+/.test(s))
    .map(s => s.replace(/^[-*•]\s+/, '').replace(/^\d+\.\s+/, '').trim())

  // 3) Strip Arabic lines & empties
  aiBullets = aiBullets.filter(s => s && !/[\u0600-\u06FF]/.test(s))

  // 4) Build rich fallbacks
  const fallbacks = generateFallbackRecs()

  // 5) Merge + de-dupe + enforce minimum count
  const merged = dedupeStrings([...aiBullets, ...fallbacks])

  // ensure at least MIN_RECS (allows more if AI provided more)
  const needed = Math.max(MIN_RECS, merged.length)
  return merged.slice(0, needed)
})

function dedupeStrings(arr) {
  const seen = new Map()
  for (const s of arr) {
    const key = s.toLowerCase()
    if (!seen.has(key)) seen.set(key, s)
  }
  return Array.from(seen.values())
}

/** Ensure **labels** render bold */
function formatAction(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
    .replace(/__(.+?)__/g, '<strong class="text-gray-900">$1</strong>')
}

/** Normalize any leftover markdown/bad spacing before formatting */
function recommendationText(item) {
  return item.replace(/\s+/g, ' ').trim()
}

/** Fallback actions if AI bullets are missing/insufficient */
function generateFallbackRecs() {
  const p = data.value?.prediction
  const onTime = Math.round((p?.onTimeProbability ?? 0) * 100)
  const risk = p?.riskScore ?? 0
  const creep = !!p?.scopeCreep

  const completed = featuresCompletedSafe.value
  const total = featuresTotalSafe.value
  const remaining = Math.max(total - completed, 0)

  const out = []

  // Scheduling
  if (onTime < 60) {
    out.push(`**Prioritize critical path:** Focus on high-impact tasks to raise on-time probability (${onTime}%).`)
  } else {
    out.push(`**Maintain momentum:** Keep current pace to sustain on-time probability at ${onTime}%.`)
  }

  // Risk management
  if (risk >= 3) {
    out.push('**Risk review:** Run a risk workshop and assign owners for mitigation actions.')
  } else {
    out.push('**Lightweight risk check:** Perform a weekly scan for potential new risks.')
  }

  // Scope creep
  if (creep) {
    out.push('**Mitigate scope creep:** Freeze non-essential changes until the next milestone.')
  }

  // Delivery / features
  if (remaining > 0) {
    out.push(`**Focus remaining work:** ${remaining} feature(s) left — assign clear owners and schedule them.`)
  } else {
    out.push('**Celebrate & close out:** All features done — prepare release notes and team retrospective.')
  }

  // Communication / ops
  out.push('**Stakeholder update:** Send a concise weekly report covering progress, risks, and next steps.')
  out.push('**Workload balance:** Reassign tasks if any teammate is overloaded.')
  out.push('**Testing & QA:** Ensure unit/integration tests are updated and regressions minimized.')
  out.push('**Documentation:** Update user guides, API docs, and project wiki for completed features.')
  out.push('**Performance watch:** Add light monitoring/alerts for error spikes and latency.')
  out.push('**Risk burndown:** Track top 3 risks with owners and review twice a week.')

  return out
}

/* ---------- API ---------- */
async function generate() {
  loading.value = true
  error.value = null
  data.value = null
  try {
    const res = await api.get(`/AI/report/${props.projectId}`, {
      params: { projectName: props.projectName, plannedEnd: props.plannedEnd }
    })
    data.value = res.data
  } catch (e) {
    error.value = e?.response?.data?.error?.message || e.message || 'Request failed'
  } finally {
    loading.value = false
  }
}

defineExpose({ generate })
</script>
