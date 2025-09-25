export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password) => {
  return password && password.length >= 6
}

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0
}

export const validateDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return true
  return new Date(startDate) <= new Date(endDate)
}
