<template>
    <div class=" text-center max-w-2xl mx-auto p-5 ">
        <h1 class="font-bold text-3xl">Built with Modern <span class="text-blue-500">Technologies</span> </h1>
        <p class="text-gray mt-2">Our project leverages cutting-edge technologies to deliver exceptional performance, scalability, and user experience across web and desktop platforms.</p>
   </div>
  <div class="flex flex-wrap justify-center items-stretch gap-6 w-full p-5">
    <div
      v-for="section in sections"
      :key="section.title"
      class="flex flex-col hover:shadow-2xl rounded-2xl p-6 sm:w-[350px] w-[400px] bg-white sm:flex-1"
    >
      <div class="text-center mb-6">
        <h1 class="text-lg font-bold hover:text-blue-500">{{ section.title }}</h1>
        <p class="text-sm text-gray-600">{{ section.subtitle }}</p>
      </div>

      <div class="flex flex-col gap-6">
        <div v-for="item in section.items" :key="item.name" class="space-y-2">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <span>{{ item.icon }}</span>
              <h1 class="font-semibold">{{ item.name }}</h1>
            </div>
            <p
              class="text-xs px-2 rounded-2xl"
              :class="item.badgeColor"
            >
              {{ item.badge }}
            </p>
          </div>
          <p class="text-sm text-gray-500">{{ item.desc }}</p>
        </div>
      </div>
    </div>
   
  </div>
  <div class="flex justify-center items-center sm:p-10 ">

      <div class=" flex border-2 rounded-2xl border-gray-200 w-fit h-fit p-6  sm:gap-8 ">
          <div class="flex flex-col justify-center items-center border-r border-gray-300 pr-6">
              <h1 class="text-blue-500 text-2xl font-bold ">7+</h1>
              <p class="text-gray-400 ">Technologies</p>
            </div>
            <div class="flex flex-col justify-center items-center border-r border-gray-300 pr-6">
                <h1 class="text-blue-500 text-2xl font-bold ">2</h1>
                <p class="text-gray-400">Platforms</p>
            </div>
            <div class="flex flex-col justify-center items-center ">
                <h1 class="text-blue-500 text-2xl font-bold">100%</h1>
                <p class="text-gray-400">Scalable</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const sections = [
  {
    title: "Frontend",
    subtitle: "Modern, responsive user interfaces",
    items: [
      { icon: "⚡", name: "Vue.js", badge: "Frontend", badgeColor: "bg-teal-100", desc: "Progressive JavaScript framework for building user interfaces" },
      { icon: "🎨", name: "Tailwind CSS", badge: "Frontend", badgeColor: "bg-teal-100", desc: "Utility-first CSS framework for rapid UI development" },
      { icon: "☕", name: "JavaFX", badge: "Frontend", badgeColor: "bg-teal-100", desc: "Rich desktop application development platform" }
    ]
  },
  {
    title: "Backend & Database",
    subtitle: "Robust server-side solutions and data management",
    items: [
      { icon: "🍃", name: "Spring Boot", badge: "Backend", badgeColor: "bg-orange-100", desc: "Enterprise-grade Java framework for microservices" },
      { icon: "🐘", name: "PostgreSQL", badge: "Database", badgeColor: "bg-orange-100", desc: "Advanced open-source relational database system" }
    ]
  },
  {
    title: "Cloud & Deployment",
    subtitle: "Scalable hosting and deployment infrastructure",
    items: [
      { icon: "☁️", name: "AWS", badge: "Cloud", badgeColor: "bg-blue-100", desc: "Comprehensive cloud computing platform and services" },
      { icon: "🚀", name: "Netlify", badge: "Cloud", badgeColor: "bg-blue-100", desc: "Modern web development platform for frontend deployment" }
    ]
  }
]
</script>
