<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 relative overflow-hidden">
    <!-- Logout -->
    <button
      @click="logout"
      class="fixed top-6 right-6 z-50 px-2 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
      </svg>
      <span>Logout</span>
    </button>

    <!-- User badge -->
    <div class="fixed top-4 left-4 z-20">
      <div class="bg-gradient-to-r from-blue-400 to-sky-500 text-white px-4 py-2 rounded-full shadow-lg">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
          <span class="text-sm font-medium">{{ userEmail }}</span>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto">
      <div class="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 relative overflow-hidden">
        
        <div class="absolute inset-0 z-0">
          <div
            class="absolute inset-0 opacity-[0.03]"
            style="background-image: linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px); background-size: 50px 50px;"
          ></div>
          <div class="absolute top-20 left-10 w-32 h-20 bg-blue-100 opacity-20 rounded-lg transform rotate-12 animate-pulse"></div>
          <div class="absolute top-40 right-20 w-24 h-16 bg-blue-200 opacity-15 rounded-lg transform -rotate-6"></div>
          <div class="absolute bottom-40 left-1/4 w-28 h-18 bg-blue-100 opacity-25 rounded-lg transform rotate-3"></div>
          <div class="absolute bottom-20 right-1/3 w-20 h-24 bg-blue-200 opacity-20 rounded-lg transform -rotate-12"></div>
          <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform rotate-12"></div>
          <div class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-10 transform -rotate-12"></div>
        </div>

        <div class="max-w-6xl mx-auto relative z-10 pt-12">
          <div class="mb-6">
            <button
              @click="$router.back()"
              class="flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Dashboard
            </button>
          </div>

          <!-- Loading / Error -->
          <div v-if="loading" class="text-center py-12">
            <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-blue-500 bg-blue-100">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading project details...
            </div>
          </div>

          <div v-else-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-red-700 font-medium">{{ error }}</span>
            </div>
          </div>

          <!-- Content -->
          <div v-else-if="project" class="space-y-6">
            <!-- Header -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                  <div class="flex items-center mb-2">
                    <div v-if="!isEditing">
                      <h1 class="text-3xl font-bold text-gray-800 mr-4">{{ project.projectTitle }}</h1>
                    </div>
                    <div v-else class="flex-1 mr-4">
                      <input
                        v-model="editForm.projectTitle"
                        placeholder="Enter project title..."
                        class="text-3xl font-bold text-gray-800 bg-transparent border-b-2 border-gray-300 focus:border-sky-400 focus:outline-none w-full pb-1 transition-all duration-200"
                      />
                    </div>
                    <span class="inline-flex px-3 py-1 text-sm font-medium rounded-full" :class="getStatusClass(project.status)">
                      {{ project.status || 'Active' }}
                    </span>
                  </div>

                 

                  <p class="text-sm text-gray-500 mt-1">Project ID: #{{ project.id }}</p>

                  <!-- Members -->
<div class="mt-2">
  <p class="text-sm text-gray-500">Members</p>

  <div class="mt-1 flex flex-wrap gap-2">
    <span
      v-for="m in (project.projectMembers || [])"
      :key="m.id || m.email"
      class="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200"
      title="Click to copy email"
      @click="navigator.clipboard?.writeText(m.email || '')"
    >
 

      <span class="font-medium">{{ m.fullName || '—' }}</span>
      <span v-if="m.email" class="text-blue-500/70">{{ m.email }}</span>
    </span>

    <span
      v-if="!(project.projectMembers && project.projectMembers.length)"
      class="text-xs text-gray-400"
    >
      No members added yet
    </span>
  </div>
</div>
                </div>

                <!-- Actions -->
                <div class="flex gap-2 items-end space-y-2">
                  <div class="flex space-x-3">
                    <button
                      v-if="!isEditing"
                      @click="editProject"
                      class="px-4 py-2 bg-gradient-to-r from-blue-400 to-sky-500 text-white font-medium rounded-lg hover:from-blue-500 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Edit Project
                    </button>
                    <template v-else>
                      <button
                        @click="saveProject"
                        :disabled="saving"
                        class="px-4 py-2  from-emerald-400 to-green-500 text-white font-medium rounded-lg hover:from-emerald-500 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        {{ saving ? 'Saving...' : 'Save' }}
                      </button>
                      <button
                        @click="cancelEdit"
                        :disabled="saving"
                        class="px-4 py-2 from-gray-400 to-gray-600 text-white font-medium rounded-lg hover:from-gray-500 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Cancel
                      </button>
                    </template>
                  </div>

                  <button
                    @click="openAddTaskModal"
                    class="px-4 py-2 bg-gradient-to-r bg-green-600 rounded-lg border border-green-200 text-white font-medium rounded-lg  hover:green-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    + Add Task
                  </button>

                  <button
  @click="openMembers"
  class="px-4 py-2 bg-gradient-to-r from-indigo-400 to-blue-500 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
>
  Edit Assign
</button>
                </div>
              </div>
            </div>

            <!-- Info + Timeline -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Info -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Project Information
                </h2>

                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <div v-if="!isEditing" class="p-3 bg-gray-50 rounded-lg border">
                      <p class="text-gray-800">{{ project.description || 'No description provided' }}</p>
                    </div>
                    <div v-else>
                      <textarea
                        v-model="editForm.description"
                        placeholder="Enter project description..."
                        rows="4"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Created By</label>
                    <div class="flex items-center p-3 bg-gray-50 rounded-lg border">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-gray-800 font-medium">{{ project.projectManager.fullName }}</span>
                      <span class="text-gray-400 text-sm ml-2">{{ project.projectManager.email }}</span>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Created At</label>
                    <div class="flex items-center p-3 bg-gray-50 rounded-lg border">
                      <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-gray-800">{{ formatDateTime(project.createdAt) }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Timeline -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Project Timeline
                </h2>

                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <div v-if="!isEditing" class="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span class="text-green-800 font-medium">{{ formatDate(project.startProject) }}</span>
                    </div>
                    <div v-else>
                      <input type="date" v-model="editForm.startProject" :min="today"class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"/>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <div v-if="!isEditing" class="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                      <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span class="text-red-800 font-medium">{{ formatDate(project.endProject) }}</span>
                    </div>
                    <div v-else>
                      <input type="date" v-model="editForm.endProject":min="editForm.startProject || today"  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-200"/>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <div class="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-blue-800 font-medium">{{ calculateDuration() }}</span>
                    </div>
                  </div>

                  <div v-if="getDaysRemaining() !== null">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Days Remaining</label>
                    <div class="flex items-center p-3 rounded-lg border" :class="getDaysRemainingClass()">
                      <svg class="w-5 h-5 mr-2" :class="getDaysRemainingIconClass()" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span :class="getDaysRemainingTextClass()" class="font-medium">
                        {{
                          getDaysRemaining() > 0
                            ? `${getDaysRemaining()} days left`
                            : getDaysRemaining() === 0
                            ? 'Due today'
                            : `${Math.abs(getDaysRemaining())} days overdue`
                        }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Progress -->
            <div v-if="details" class="bg-white rounded-2xl shadow-lg p-6">
              <div class="flex items-center justify-between mb-3">
                <h2 class="text-xl font-bold text-gray-800 flex items-center">
                  <svg class="w-6 h-6 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6M5 8h14M7 4h10M5 16h14"></path>
                  </svg>
                  Project Progress
                </h2>
                <span class="text-sm font-semibold text-gray-700">{{ details.percentCompleted }}%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                <div class="h-2 bg-emerald-500 rounded-full" :style="{ width: (details.percentCompleted || 0) + '%' }"></div>
              </div>
            </div>

            <!-- Tasks -->
            <div v-if="details" class="bg-white rounded-2xl shadow-lg p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18"></path>
                </svg>
                Tasks
              </h2>

              <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 items-start">
                <div
                  v-for="col in detailColumns"
                  :key="col.key"
                  class="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur flex flex-col"
                >
                  <!-- Column header -->
                  <div class="flex items-center justify-between px-5 py-4 bg-gray-50 border-b">
                    <div class="flex items-center space-x-2">
                      <span :class="['inline-block w-2.5 h-2.5 rounded-full', col.dot]"></span>
                      <span class="font-semibold text-gray-900">{{ col.title }}</span>
                    </div>
                    <span class="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {{
                        col.key === 'tasksToDo'
                          ? tasksCount.tasksToDo
                          : col.key === 'tasksInProgress'
                          ? tasksCount.tasksInProgress
                          : col.key === 'tasksReview'
                          ? tasksCount.tasksReview
                          : tasksCount.tasksCompleted
                      }}
                    </span>
                  </div>

                  <!-- Task items -->
                  <ul class="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    <li
                      v-for="(t, idx) in (details[col.key] || [])"
                      :key="taskKey(col.key, t, idx)"
                      @click="openTaskModal(t)"
                      class="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md hover:bg-blue-50/40 transition"
                    >
                      <div class="flex items-start justify-between gap-3">
                        <h3 class="text-[15px] leading-snug font-semibold text-gray-900 break-words">
                          {{ getTaskTitle(t) }}
                        </h3>

                        <div class="relative" data-task-menu @click.stop>
                          <button
                            @click.stop.prevent="openMenu($event, taskKey(col.key, t, idx))"
                            class="p-1.5 rounded-md hover:bg-gray-100 focus:outline-none"
                            aria-label="Task menu"
                            data-task-menu
                            title="Options"
                          >
                            <svg data-task-menu xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 3a1.6 1.6 0 110 3.2A1.6 1.6 0 0110 3zm0 5.4a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM11.6 14.8a1.6 1.6 0 10-3.2 0 1.6 1.6 0 003.2 0z"/>
                            </svg>
                          </button>

                          <teleport to="body">
                            <div
                              v-if="openMenuId === taskKey(col.key, t, idx)"
                              class="fixed z-[1000] w-32 bg-white border border-gray-200 rounded-lg shadow-xl"
                              :style="{ top: menuPos.top + 'px', left: menuPos.left + 'px' }"
                              data-task-menu
                            >
                              <button
                                @click="handleDelete(t, col.key, idx)"
                                class="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                                data-task-menu
                              >
                                Delete
                              </button>
                            </div>
                          </teleport>
                        </div>
                      </div>
                    </li>

                    <li v-if="(details[col.key] || []).length === 0" class="text-xs text-gray-400 px-2 py-1">
                      No tasks in this column
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer quote -->
          <div class="text-center mt-8 pb-4">
            <p class="text-xs text-blue-400 italic">
              "Attention to detail makes the difference between average and stunning! 🎯"
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Task Modal -->
    <div v-if="showAddTask" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40" @click="closeAddTaskModal"></div>

      <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Add Task</h3>
          <button @click="closeAddTaskModal" class="p-2 rounded-md hover:bg-gray-100" aria-label="Close">
            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

        </div>
        

        <form @submit.prevent="submitAddTask">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title <span class="text-red-500">*</span></label>
              <input
                v-model="taskForm.title"
                type="text"
                required
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="e.g., Design DB"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                v-model="taskForm.description"
                rows="3"
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Optional details..."
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                v-model="taskForm.startDate"
                type="date"
                :min="today"
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Assign to (email)</label>
              <select
                v-model="taskForm.assignedEmail"
                class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="" disabled selected>Select member</option>
                <option v-for="e in memberEmails" :key="e" :value="e">{{ e }}</option>
              </select>
              <p v-if="memberEmailsLoading" class="text-xs text-gray-500 mt-1">Loading members…</p>
            </div>
          </div>

          <div class="mt-6 flex justify-end space-x-3">
            <button type="button" @click="closeAddTaskModal" class="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button
              type="submit"
              :disabled="creatingTask || !canSubmitTask"
              class="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ creatingTask ? 'Creating…' : 'Create Task' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>


   

    <hr class="my-4"/>

  <!-- Edit Assign Members button (put it near Add Task) -->
<!-- Manage Members (single modal) -->
<div v-if="showMembers" class="fixed inset-0 z-50 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40" @click="closeMembers"></div>

  <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6
              max-h-[85vh] overflow-y-auto">
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-lg font-semibold text-gray-800">Edit Assigned Members</h3>
      <button @click="closeMembers" class="p-2 rounded-md hover:bg-gray-100" aria-label="Close">
        <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
          <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Add by email -->
    <div class="mb-3">
      <label class="block text-xs font-medium text-gray-600 mb-1">Add by email</label>
      <div class="relative">
        <input
          ref="assignInput"
          v-model="query"
          type="text"
          placeholder="Type an email (or name to search)…"
          class="w-full p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
        />

        <!-- Small, scrollable suggestions -->
        <div
          v-show="query && (loadingSuggestions || filteredSuggestions.length)"
          class="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow-lg
                 max-h-56 overflow-y-auto z-50 divide-y"
        >
          <div v-if="loadingSuggestions" class="p-2 text-xs text-gray-500">Searching…</div>

          <button
            v-for="s in filteredSuggestions"
            :key="s.email"
            class="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm flex items-center justify-between"
            @click="addMemberByEmail(s.email)"
          >
            <div class="truncate">
              <div class="font-medium text-gray-800 truncate">{{ s.fullName || '—' }}</div>
              <div class="text-xs text-gray-500 truncate">{{ s.email }}</div>
            </div>
            <span class="text-indigo-600 text-xs">Add</span>
          </button>
        </div>
      </div>

      <div class="mt-2 flex justify-end">
        <button
          :disabled="adding || !query.trim()"
          @click="addMemberByEmail(query.trim())"
          class="px-3 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 text-sm"
        >
          {{ adding ? 'Adding…' : 'Add' }}
        </button>
      </div>
    </div>

    
    <!-- Current members (smaller + scrollable) -->
    <div>
      <div class="text-xs text-gray-500 mb-2">Current members</div>

      <div v-if="(liveMembers?.length || 0) === 0" class="text-xs text-gray-400 border rounded-lg p-3">
        No members yet.
      </div>

      <ul v-else class="space-y-2 max-h-64 overflow-y-auto pr-1">
        <li
          v-for="m in liveMembers"
          :key="m.email"
          class="flex items-center justify-between border rounded-lg p-2.5 bg-gray-50"
        >
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
              {{ (m.fullName || m.email || '?').split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase() }}
            </div>
            <div class="min-w-0">
              <div class="text-sm font-medium text-gray-800 truncate">{{ m.fullName || '—' }}</div>
              <div class="text-xs text-gray-500 truncate">{{ m.email }}</div>
            </div>
          </div>

          <button
            @click="removeMember(m.email)"
            :disabled="removing === m.email"
            class="text-red-600 hover:underline text-sm shrink-0"
          >
            {{ removing === m.email ? 'Removing…' : 'Remove' }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>

    <!-- Task Details Modal -->
    <div v-if="showTaskDetails" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/40" @click="closeTaskModal"></div>

      <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Task Details</h3>
          <button @click="closeTaskModal" class="p-2 rounded-md hover:bg-gray-100" aria-label="Close">
            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <div v-if="taskDetailsLoading" class="py-6 text-sm text-gray-500">Loading…</div>

        <div v-else class="space-y-4">
          <div class="flex items-start justify-between">
            <div class="pr-3">
              <div class="text-xs text-gray-400 uppercase tracking-wide">Title</div>
              <div class="text-[15px] font-semibold text-gray-900 break-words">
                {{ selectedTask?.title || '(untitled)' }}
              </div>
            </div>
            <span :class="['px-2 py-1 text-xs rounded-full', statusPillClass(selectedTask?.status)]">
              {{ selectedTask?.status || 'TO_DO' }}
            </span>
          </div>

          <div>
            <div class="text-xs text-gray-400 uppercase tracking-wide mb-1">Description</div>
            <p class="text-sm text-gray-800 whitespace-pre-wrap">
              {{ selectedTask?.description || '—' }}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="text-xs text-gray-400 uppercase tracking-wide mb-1">Created at</div>
              <div class="text-sm text-gray-800">{{ formatDateTime(selectedTask?.createdAt) }}</div>
            </div>
            <div>
              <div class="text-xs text-gray-400 uppercase tracking-wide mb-1">Assigned to</div>
              <div class="text-sm text-gray-800">
                {{ selectedTask?.assignedToEmail || 'Unassigned' }}
              </div>
            </div>
          </div>

          <!-- Comments -->
          <div class="mt-4">
            <div class="flex items-center justify-between mb-2">
              <div class="text-xs text-gray-400 uppercase tracking-wide">Comments</div>
              <span class="text-xs text-gray-500">
                {{ (selectedTask?.comments?.length || 0) }} total
              </span>
            </div>

            <div v-if="!selectedTask?.comments?.length" class="text-sm text-gray-400">
              No comments yet.
            </div>

            <ul v-else class="space-y-3 max-h-60 overflow-auto pr-1">
              <li
                v-for="c in selectedTask.comments"
                :key="c.id"
                class="border border-gray-200 rounded-lg bg-gray-50 p-3"
              >
                <div class="flex items-center justify-between">
                  <div class="font-medium text-gray-800">
                    {{ c.createdBy || 'Unknown' }}
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ formatDateTime(c.createdAt) }}
                  </div>
                </div>
                <p class="mt-2 text-sm text-gray-700 whitespace-pre-wrap">
                  {{ c.text }}
                </p>
              </li>
            </ul>
          </div>
          <!-- /Comments -->
        </div>
      </div>
    </div>
    <!-- /Task Details Modal -->
 
</template>

<script setup>

import { projectService } from '../api/projectService'
import { useAuthStore } from '../stores/auth'
import { useRouter, useRoute } from 'vue-router'
import { taskService } from '../api/taskService'
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'



const openAssign = () => {
  showAssign.value = true
  liveMembers.value = project.value?.projectMembers ? [...project.value.projectMembers] : []
  query.value = ''
  suggestions.value = []
  nextTick(() => assignInput.value?.focus())
}

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()


const menuPos = ref({ top: 0, left: 0 })
const MENU_H = 48   // ≈ dropdown height
const MENU_W = 128

const project = ref(null)
const details = ref(null)
const error = ref(null)
const loading = ref(true)

const isEditing = ref(false)
const saving = ref(false)
const editForm = ref({
  name: '',
  projectTitle: '',
  description: '',
  startProject: '',
  endProject: ''
})

// 3-dot menu state
const openMenuId = ref(null)

// Task identity helpers
const getTaskId = (t) => t?.id ?? t?.taskId ?? null
const getTaskTitle = (t) => t?.title ?? t?.name ?? t?.taskName ?? (typeof t === 'string' ? t : 'Untitled')
const taskKey = (colKey, t, idx) => `${colKey}-${getTaskId(t) ?? idx}`

// Columns
const detailColumns = [
  { key: 'tasksToDo',        title: 'To Do',       dot: 'bg-gray-400'    },
  { key: 'tasksInProgress',  title: 'In Progress', dot: 'bg-blue-500'    },
  { key: 'tasksReview',      title: 'Review',      dot: 'bg-amber-500'   },
  { key: 'tasksCompleted',   title: 'Completed',   dot: 'bg-emerald-500' },
]


const showMembers = ref(false)
const liveMembers = ref([])
const query = ref('')
const suggestions = ref([])
const loadingSuggestions = ref(false)
const adding = ref(false)
const removing = ref(null)
const assignInput = ref(null)

// open/close
const openMembers = () => {
  showMembers.value = true
  liveMembers.value = project.value?.projectMembers ? [...project.value.projectMembers] : []
  query.value = ''
  suggestions.value = []
  nextTick(() => assignInput.value?.focus())
}
const closeMembers = () => {
  showMembers.value = false
  query.value = ''
  suggestions.value = []
}

// add & remove (you already had these)
const addMemberByEmail = async (email) => {
  if (!email) return
  adding.value = true
  try {
    await projectService.addMember(route.params.id, email)
    const { data } = await projectService.getProjectById(route.params.id)
    project.value = data
    liveMembers.value = data.projectMembers || []
    query.value = ''
    suggestions.value = []
  } catch (e) {
    error.value = e?.response?.data?.message || 'Failed to add member'
  } finally {
    adding.value = false
  }
}

const removeMember = async (email) => {
  removing.value = email
  try {
    await projectService.removeMember(route.params.id, email, false)
    const { data } = await projectService.getProjectById(route.params.id)
    project.value = data
    liveMembers.value = data.projectMembers || []
  } catch (e) {
    error.value = e?.response?.data?.message || 'Failed to remove member'
  } finally {
    removing.value = null
  }
}

// suggestions (also filter out already-added emails)
watch(query, async (q) => {
  const v = q?.trim()
  if (!v) { suggestions.value = []; return }
  loadingSuggestions.value = true
  try {
    const { data } = await projectService.suggestUsers(v, route.params.id)
    const current = new Set((liveMembers.value || []).map(m => (m.email || '').toLowerCase()))
    suggestions.value = (Array.isArray(data) ? data : []).filter(
      s => !current.has((s.email || '').toLowerCase())
    )
  } catch {
    suggestions.value = []
  } finally {
    loadingSuggestions.value = false
  }
})

const filteredSuggestions = computed(() => suggestions.value)
const canAddMember = computed(() => {
  const v = memberQuery.value?.trim()
  if (!v) return false
  // don’t allow adding duplicates
  return !(project.value?.projectMembers || []).some(m => (m.email || '').toLowerCase() === v.toLowerCase())
})

const initials = (name, email) => {
  const n = (name || '').trim()
  if (n) {
    return n.split(/\s+/).map(p => p[0]).join('').slice(0,2).toUpperCase()
  }
  return (email || '?').slice(0,2).toUpperCase()
}



  


const pickSuggestion = (s) => {
  memberQuery.value = s.email
  showSuggest.value = false
}

const onAddMember = async () => {
  const email = memberQuery.value?.trim()
  if (!email) return
  memberBusy.value = true
  memberErr.value = ''
  try {
    const projectId = route.params.id
    // POST /projects/{id}/members  body: { email }
    const { data } = await projectService.addMember(projectId, email)
    // Backend returns ProjectDetailsDto1; we only need refreshed member list.
    // If it contains members array, use it; else push optimistically.
    const newMember = {
      id: data?.member?.id || null,
      fullName: data?.member?.fullName || null,
      email
    }
    // Update local list only if not already in it
    const list = project.value?.projectMembers || []
    if (!list.some(m => (m.email || '').toLowerCase() === email.toLowerCase())) {
      list.push(newMember)
      project.value.projectMembers = [...list]
    }
    memberQuery.value = ''
    showSuggest.value = false
  } catch (e) {
    memberErr.value = e?.response?.data?.message || e?.message || 'Failed to add member'
  } finally {
    memberBusy.value = false
  }
}

const onRemoveMember = async (m) => {
  if (!m?.email) return
  memberBusy.value = true
  memberErr.value = ''
  try {
    const projectId = route.params.id
    // returns List<String> of member emails
    const { data: emails } = await projectService.removeMember(projectId, m.email, false)
    // Replace local list based on returned emails
    const byEmail = new Set((emails || []).map(e => e.toLowerCase()))
    const kept = (project.value?.projectMembers || []).filter(x => byEmail.has((x.email || '').toLowerCase()))
    project.value.projectMembers = kept
  } catch (e) {
    memberErr.value = e?.response?.data?.message || e?.message || 'Failed to remove member'
  } finally {
    memberBusy.value = false
  }
}


const tasksCount = computed(() => {
  if (!details.value) {
    return { tasksToDo: 0, tasksInProgress: 0, tasksReview: 0, tasksCompleted: 0 }
  }
  return {
    tasksToDo:        details.value.tasksToDo?.length ?? 0,
    tasksInProgress:  details.value.tasksInProgress?.length ?? 0,
    tasksReview:      details.value.tasksReview?.length ?? 0,
    tasksCompleted:   details.value.tasksCompleted?.length ?? 0,
  }
})

const userEmail = computed(() => {
  if (authStore.token) {
    try {
      const payload = JSON.parse(atob(authStore.token.split('.')[1]))
      return payload.email || payload.sub || 'user@example.com'
    } catch (e) {
      return 'user@example.com'
    }
  }
  return 'user@example.com'
})

function logout() { router.push('/logout') }

const today = ref('')
const toYMD = (d) => {
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}
onMounted(async () => {
  try {
    loading.value = true
    const projectId = route.params.id

    today.value = toYMD(new Date())


    // one project
    const { data: proj } = await projectService.getProjectById(projectId)
    project.value = proj
    if (!project.value) {
      error.value = 'Project not found'
      return
    }

    // sync form
    editForm.value = {
      name: project.value.name || '',
      projectTitle: project.value.projectTitle || '',
      description: project.value.description || '',
      startProject: project.value.startProject ? String(project.value.startProject).split(' ')[0] : '',
      endProject: project.value.endProject ? String(project.value.endProject).split(' ')[0] : ''
    }

    // project details (tasks + percent)
    const { data: detailsDto } = await taskService.getProjectDetails(projectId)
    details.value = detailsDto
  } catch (err) {
    console.error('Failed to load project/details:', err)
    error.value = err?.response?.data?.message || 'Failed to load project details'
  } finally {
    loading.value = false
  }
})

// Edit / Save
const editProject = () => { isEditing.value = true }

const cancelEdit = () => {
  isEditing.value = false
  editForm.value = {
    name: project.value?.name || '',
    projectTitle: project.value?.projectTitle || '',
    description: project.value?.description || '',
    startProject: project.value?.startProject ? String(project.value.startProject).split(' ')[0] : '',
    endProject: project.value?.endProject ? String(project.value.endProject).split(' ')[0] : ''
  }
}

const saveProject = async () => {
  saving.value = true
  error.value = null
  const compact = (obj) =>
    Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== '' && v !== null && v !== undefined))

  const payload = compact({
    name: editForm.value.name?.trim(),
    projectTitle: editForm.value.projectTitle?.trim(),
    description: editForm.value.description?.trim(),
    startProject: editForm.value.startProject,
    endProject: editForm.value.endProject,
  })

  try {
    const projectId = route.params.id
    const { data } = await projectService.patchProject(projectId, payload)

    project.value = data
    editForm.value = {
      name: data?.name || '',
      projectTitle: data?.projectTitle || '',
      description: data?.description || '',
      startProject: data?.startProject ? String(data.startProject).split('T')[0] : (data?.startProject?.split?.(' ')[0] || ''),
      endProject: data?.endProject ? String(data.endProject).split('T')[0] : (data?.endProject?.split?.(' ')[0] || '')
    }

    isEditing.value = false
  } catch (err) {
    console.error('Failed to update project:', err)
    error.value = err?.response?.data?.message || err?.message || 'Failed to update project'
  } finally {
    saving.value = false
  }
}

// Delete Task
const handleDelete = async (t, colKey, idx) => {
  const id = getTaskId(t)
  if (!id) {
    error.value = 'Task id missing in ProjectDetails response.'
    return
  }
  try {
    await taskService.deleteTask(id) // expects 2xx
    const list = details.value?.[colKey]
    if (Array.isArray(list)) list.splice(idx, 1)
    openMenuId.value = null
  } catch (err) {
    console.error('Failed to delete task:', err)
    error.value = err?.response?.data?.message || 'Failed to delete task'
  }
}



function openMenu(evt, id) {
  // toggle if clicking the same button
  if (openMenuId.value === id) {
    openMenuId.value = null
    return
  }

  const r = evt.currentTarget.getBoundingClientRect()
  const spaceBelow = window.innerHeight - r.bottom
  const dropUp = spaceBelow < (MENU_H + 8)

  // IMPORTANT: no scrollY/scrollX for fixed positioning
  const top = dropUp ? r.top - MENU_H - 8 : r.bottom + 8

  // keep within viewport horizontally
  let left = r.right - MENU_W
  left = Math.min(left, window.innerWidth - MENU_W - 8)
  left = Math.max(8, left)

  menuPos.value = { top, left }
  openMenuId.value = id
}

// Close on Esc / outside (teleport-safe)
const onKey = (e) => { if (e.key === 'Escape') openMenuId.value = null }
const onPointerDown = (e) => {
  // robust outside click check
  const inside = e.target.closest?.('[data-task-menu]') != null
  if (!inside) openMenuId.value = null
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  // capture phase helps avoid races on some browsers
  window.addEventListener('pointerdown', onPointerDown, true)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('pointerdown', onPointerDown, true)
})
/* ------------------------------------- */

// Status classes
function getStatusClass(status) {
  const s = String(status || '').toUpperCase()
  switch (s) {
    case 'COMPLETED':    return 'bg-green-100 text-green-800'
    case 'IN_PROGRESS':  return 'bg-blue-100 text-blue-800'
    case 'REVIEW':       return 'bg-amber-100 text-amber-800'
    case 'ON_HOLD':      return 'bg-yellow-100 text-yellow-800'
    default:             return 'bg-gray-100 text-gray-800'
  }
}
const statusPillClass = (s) => {
  switch (String(s || '').toUpperCase()) {
    case 'COMPLETED':   return 'bg-green-100 text-green-700'
    case 'IN_PROGRESS': return 'bg-blue-100 text-blue-700'
    case 'REVIEW':      return 'bg-amber-100 text-amber-700'
    case 'TO_DO':
    default:            return 'bg-gray-100 text-gray-700'
  }
}

// Utils
const formatDate = (dateString) => {
  if (!dateString) return 'Not set'
  try { return new Date(dateString).toLocaleDateString() } catch { return 'Invalid date' }
}
const formatDateTime = (dateString) => {
  if (!dateString) return 'Not set'
  try { return new Date(dateString).toLocaleString() } catch { return 'Invalid date' }
}
const calculateDuration = () => {
  if (!project.value?.startProject || !project.value?.endProject) return 'Not specified'
  try {
    const start = new Date(project.value.startProject)
    const end = new Date(project.value.endProject)
    const diffDays = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24))
    return `${Math.round(diffDays / 30)} months`
  } catch { return 'Invalid dates' }
}
const getDaysRemaining = () => {
  if (!project.value?.endProject) return null
  try {
    const diffTime = new Date(project.value.endProject) - new Date()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  } catch { return null }
}
const getDaysRemainingClass = () => {
  const d = getDaysRemaining()
  if (d === null) return 'bg-gray-50 border-gray-200'
  if (d < 0) return 'bg-red-50 border-red-200'
  if (d <= 3) return 'bg-yellow-50 border-yellow-200'
  return 'bg-green-50 border-green-200'
}
const getDaysRemainingIconClass = () => {
  const d = getDaysRemaining()
  if (d === null) return 'text-gray-500'
  if (d < 0) return 'text-red-500'
  if (d <= 3) return 'text-yellow-500'
  return 'text-green-500'
}
const getDaysRemainingTextClass = () => {
  const d = getDaysRemaining()
  if (d === null) return 'text-gray-800'
  if (d < 0) return 'text-red-800'
  if (d <= 3) return 'text-yellow-800'
  return 'text-green-800'
}

/* Add Task Modal + Create flow */
const showAddTask = ref(false)
const creatingTask = ref(false)
const memberEmails = ref([])
const memberEmailsLoading = ref(false)

const taskForm = ref({
  title: '',
  description: '',
  startDate: '',
  assignedEmail: ''
})
const canSubmitTask = computed(() => Boolean(taskForm.value.title?.trim()))

const openAddTaskModal = async () => {
  showAddTask.value = true
  memberEmailsLoading.value = true
  memberEmails.value = []
  try {
    const projectId = route.params.id
    const { data } = await projectService.getMemberEmails(projectId) // List<String>
    memberEmails.value = Array.isArray(data) ? data : []
  } catch (_) {
    memberEmails.value = []
  } finally {
    memberEmailsLoading.value = false
  }
}

const closeAddTaskModal = () => {
  showAddTask.value = false
  taskForm.value = { title: '', description: '', startDate: '', assignedEmail: '' }
}

const insertNewTaskToColumn = (task) => {
  if (!details.value) return
  const status = String(task?.status ?? 'TO_DO').toUpperCase()
  const item = {
    id: task?.id ?? task?.taskId ?? null,
    title: task?.title ?? taskForm.value.title,
    assignedToEmail: task?.assignedToEmail ?? taskForm.value.assignedEmail ?? null
  }
  if (!item.id) return

  if (status === 'IN_PROGRESS') details.value.tasksInProgress.unshift(item)
  else if (status === 'REVIEW') details.value.tasksReview.unshift(item)
  else if (status === 'COMPLETED') details.value.tasksCompleted.unshift(item)
  else details.value.tasksToDo.unshift(item)
}

const submitAddTask = async () => {
  if (!canSubmitTask.value) return
  creatingTask.value = true
  try {
    const payload = {
      title: taskForm.value.title.trim(),
      description: taskForm.value.description?.trim() || null,
      projectId: Number(route.params.id),
      startProject: taskForm.value.startDate ? new Date(taskForm.value.startDate).toISOString() : null,
      assignedToEmail: taskForm.value.assignedEmail || null
    }

    const { data: newTask } = await taskService.createTask(payload) // 201 Created
    insertNewTaskToColumn(newTask)
    closeAddTaskModal()
  } catch (err) {
    console.error('Failed to create task:', err)
    error.value = err?.response?.data?.message || 'Failed to create task'
  } finally {
    creatingTask.value = false
  }
}

/* Task Details modal */
const showTaskDetails = ref(false)
const taskDetailsLoading = ref(false)
const selectedTask = ref(null)

const openTaskModal = async (t) => {
  const id = getTaskId(t)
  if (!id) return
  showTaskDetails.value = true
  taskDetailsLoading.value = true
  selectedTask.value = { id, title: getTaskTitle(t) } // optimistic

  try {
    const { data } = await taskService.getTaskById(id) // TaskEmployeeDto
    selectedTask.value = data
  } catch (e) {
    console.error('Failed to load task details:', e)
  } finally {
    taskDetailsLoading.value = false
  }
}

const closeTaskModal = () => {
  showTaskDetails.value = false
  selectedTask.value = null
}
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.hover\:scale-105:hover { transform: scale(1.05); }
* { transition: all 0.2s ease-in-out; }
</style>
