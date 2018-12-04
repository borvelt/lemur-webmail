const https = require('https')
const querystring = require('querystring')

function callApi(options = {}, data = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = ''
      res.setEncoding('utf8')
      res.on('data', chunk => {
        data += chunk
      })
      res.on('end', () => {
        resolve(data)
      })
    })
    req.on('error', error => reject(error))
    req.write(querystring.stringify(data))
    req.end()
  })
}

const apiPlugin = {
  name: 'apiPlugin',
  version: '1.0.0',
  register: async function(server) {
    server.route({
      method: 'GET',
      path: '/yesnowtf',
      handler: async function(request) {
        return await callApi(
          {
            hostname: 'yesno.wtf',
            port: 443,
            path: '/api?' + querystring.stringify(request.query),
            method: 'GET'
          },
          { force: 'yes' }
        )
      }
    })
  }
}

module.exports = apiPlugin
