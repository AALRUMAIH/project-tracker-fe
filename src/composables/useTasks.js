import { useTasksStore } from '@/store/modules/tasks'
import { computed } from 'vue'

export function useTasks() {
  const tasksStore = useTasksStore()

  const tasks = computed(() => tasksStore.tasks)
  const isLoading = computed(() => tasksStore.isLoading)
  const completedTasks = computed(() => tasksStore.completedTasks)
  const inProgressTasks = computed(() => tasksStore.inProgressTasks)

  const fetchTasks = async () => {
    return await tasksStore.fetchTasks()
  }

  const createTask = async (taskData) => {
    return await tasksStore.createTask(taskData)
  }

  const updateTaskStatus = async (taskId, status) => {
    return await tasksStore.updateTaskStatus(taskId, status)
  }

  const assignTask = async (taskId, userId) => {
    return await tasksStore.assignTask(taskId, userId)
  }

  const tasksByProject = (projectId) => {
    return tasksStore.tasksByProject(projectId)
  }

  return {
    tasks,
    isLoading,
    completedTasks,
    inProgressTasks,
    fetchTasks,
    createTask,
    updateTaskStatus,
    assignTask,
    tasksByProject
  }
}
