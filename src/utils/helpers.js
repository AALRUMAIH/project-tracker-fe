export const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const formatDateTime = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const getStatusColor = (status) => {
  const colors = {
    'TO_DO': 'bg-gray-100 text-gray-800',
    'IN_PROGRESS': 'bg-blue-100 text-blue-800',
    'REVIEWED': 'bg-yellow-100 text-yellow-800',
    'COMPLETED': 'bg-green-100 text-green-800'
  }
  return colors[status] || 'bg-gray-100 text-gray-800'
}

export const calculateProgress = (completed, total) => {
  if (total === 0) return 0
  return Math.round((completed / total) * 100)
}
