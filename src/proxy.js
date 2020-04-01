const Fastify = require('fastify')
const server = Fastify()

server.register(require('fastify-http-proxy'), {
  upstream: 'https://public-api.wordpress.com/rest/v1.1/',
  prefix: '/'
})

server.register(require('fastify-cors'), { origin: '*' })

server.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})
