const fieldsTransform = (user, jsonFields = ['tasks', 'tasksOnCalendar', 'categories']) => {
  const u = Object.assign({}, user)
  jsonFields.forEach(f => {
    if (u[f]) {
      const data = u[f]
      if (typeof data === 'string') {
        u[f] = JSON.parse(data)
      } else if (Array.isArray(data)) {
        u[f] = JSON.stringify(data)
      }
    }
  })
  return u
}
export {
  fieldsTransform
}
