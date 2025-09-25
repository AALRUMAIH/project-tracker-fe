// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// Pages
import Landing from '../pages/Landing.vue'
import Login from '../pages/Login.vue'
import Logout from '../pages/Logout.vue'

// Admin
const UserListA = () => import('../components/Admin/UserListA.vue')
const ProjectsAdmin = () => import('../components/Projects.vue')
const ProjectList = () => import('../components/Admin/ProjectList.vue')

// Admin dashboard (adjust path if different)
const AdminDashboard = () => import('../views/Dashboard.vue')

// PM
import ProjectManagerDashboard from '../pages/ProjectManagerDashboard.vue'
import ProjectManagerProjectDetails from '../pages/ProjectManagerProjectDetails.vue'
import CreateProject from '../components/CreateProject.vue'
import AssignMember from '../components/AssignMember.vue'
import CreateTask from '../components/CreateTask.vue'

// Employee
import ViewProject from '../pages/Employee/viewProject.vue'
import ProjectDetails from '../pages/Employee/projectDetails.vue'

const routes = [
  // Root → Landing (keep ONE definition of '/')
  { path: '/', name: 'Landing', component: Landing },

  // Auth
  { path: '/login', name: 'Login', component: Login, meta: { requiresGuest: true } },
  { path: '/logout', name: 'Logout', component: Logout },

  // Admin
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: UserListA,
    meta: { requiresAuth: true, roles: ['ADMIN'], layout: 'admin' }
  },
  {
    path: '/admin/projects',
    name: 'AdminProjects',
    component: ProjectsAdmin,
    meta: { requiresAuth: true, roles: ['ADMIN'], layout: 'admin' }
  },
  {
    path: '/admin/projects/:id',
    name: 'AdminProjectDetails',
    component: ProjectList,
    meta: { requiresAuth: true, roles: ['ADMIN'], layout: 'admin' }
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true, roles: ['ADMIN'], layout: 'admin' }
  },

  // Project Manager
  { path: '/pm/dashboard', name: 'PMDashboard', component: ProjectManagerDashboard, meta: { requiresAuth: true, roles: ['PROJECT_MANAGER'] } },
  { path: '/pm/projects/:id', name: 'PMProjectDetails', component: ProjectManagerProjectDetails, meta: { requiresAuth: true, roles: ['PROJECT_MANAGER'] } },
  { path: '/pm/create-project', name: 'PMCreateProject', component: CreateProject, meta: { requiresAuth: true, roles: ['PROJECT_MANAGER'] } },
  { path: '/pm/assign-member', name: 'PMAssignMember', component: AssignMember, meta: { requiresAuth: true, roles: ['PROJECT_MANAGER'] } },
  { path: '/pm/create-task', name: 'PMCreateTask', component: CreateTask, meta: { requiresAuth: true, roles: ['PROJECT_MANAGER'] } },

  // Employee
  { path: '/projects', name: 'EmployeeProjects', component: ViewProject, meta: { requiresAuth: true, roles: ['TEAM_MEMBER'] } },
  { path: '/projects/:id', name: 'EmployeeProjectDetails', component: ProjectDetails, meta: { requiresAuth: true, roles: ['TEAM_MEMBER'] } },

  // 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: { template: '<div class="p-6">Not Found</div>' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  // Rehydrate safely from localStorage
  const rawToken = localStorage.getItem('token')
  const rawRole  = localStorage.getItem('role')

  const clean = (v) =>
    v && v !== 'null' && v !== 'undefined' ? v : ''

  auth.token = auth.token || clean(rawToken)
  auth.role  = auth.role  || clean(rawRole)

  const token = auth.token
  const role  = auth.role

  // Heuristic: treat as authed only if token looks like a JWT (contains a dot)
  const isAuthed = !!(token && token.includes('.'))

  // Guest-only pages (e.g., /login)
  if (to.meta?.requiresGuest && isAuthed) {
    if (role === 'ADMIN')           return next('/admin/dashboard')
    if (role === 'PROJECT_MANAGER') return next('/pm/dashboard')
    if (role === 'TEAM_MEMBER')     return next('/projects')
    return next('/') // fallback
  }

  // Require auth
  if (to.meta?.requiresAuth && !isAuthed) {
    return next({ name: 'Login' })
  }

  // Role protection
  if (to.meta?.roles?.length) {
    const allowed = to.meta.roles.includes(role)
    if (!allowed) {
      if (!isAuthed) return next({ name: 'Login' })
      if (role === 'ADMIN')           return next('/admin/dashboard')
      if (role === 'PROJECT_MANAGER') return next('/pm/dashboard')
      if (role === 'TEAM_MEMBER')     return next('/projects')
      return next({ name: 'Login' })
    }
  }

  next()
})

export default router
