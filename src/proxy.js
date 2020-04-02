const express = require('express')
const app = express()
const port = 3000
const exec = require('child_process').exec

app.get('/', (req, res) => {
  const url = `https://public-api.wordpress.com/rest/v1/sites/${req.query.site}/posts/${req.query.post}/related`
  const command = 'curl --data-urlencode "size=3" ' + url

  exec(command, function (error, out) {
    console.log('out: ', JSON.parse(out))

    if (error !== null) {
      console.log('exec error: ' + error)
      res.status(500).send('error')
    }

    res.header('Access-Control-Allow-Origin', '*')
    res.send(JSON.parse(out))
  })
})

app.listen(port, () => console.log(`listening at http://localhost:${port}`))
