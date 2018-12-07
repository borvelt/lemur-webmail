export default function({ $axios }) {
  if (process.env.NODE_ENV !== 'production') {
    return
  }
  if (process.static && process.browser) {
    $axios.defaults.baseURL = undefined
  }
  if (!process.static || process.browser) {
    return
  }
  const { join, dirname } = require('path')
  const { writeFile, mkdir, existsSync, readFile } = require('fs')
  $axios.interceptors.response.use(function(response) {
    const path = join(
      process.cwd(),
      'dist',
      response.request.path.split('?')[0]
    )
    try {
      if (!existsSync(path)) {
        throw new Error('file not found')
      }
      readFile(path, 'utf8', (error, content) => {
        response.data = JSON.parse(content)
      })
      return response
    } catch (e) {
      try {
        mkdir(dirname(path), { recursive: true }, () => {
          writeFile(path, JSON.stringify(response.data), () => {})
        })
        return response
      } catch (e) {
        return Promise.reject(e)
      }
    }
  })
}
