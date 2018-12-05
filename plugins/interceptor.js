export default function({ $axios }) {
  console.log($axios.defaults.baseURL)
  $axios.defaults.baseURL = process.env.BASE_URL
  console.log($axios.defaults.baseURL)
  if (!process.static || process.browser) {
    return
  }

  //TODO: mention if you need to call api from BASE_URL you should change
  // this line.
  $axios.defaults.baseURL = process.env._AXIOS_BASE_URL_
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
