const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<html><head><title>Hello</title></head><body><p>Hello, World!</body></html>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
