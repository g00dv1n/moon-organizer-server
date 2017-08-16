const fieldsTransform = (user, jsonFields = [
  'tasks',
  'tasksOnCalendar',
  'categories',
  'geoData']
) => {
  const u = Object.assign({}, user)
  jsonFields.forEach(f => {
    if (u[f]) {
      const data = u[f]
      if (typeof data === 'string') {
        u[f] = JSON.parse(data)
      } else {
        u[f] = JSON.stringify(data)
      }
    }
  })
  return u
}
export {
  fieldsTransform
}
