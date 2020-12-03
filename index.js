// const dotenv = require('dotenv')
// dotenv.config()
require('dotenv').config()
const express = require('express')
const cors = require('cors')

// console.log(__dirname)
// console.log(process.env.USERNAME)
// console.log(process.env.PORT)
// console.log(process.env.LADY)
// console.log(process.env.FOO)
// console.log(process.env.ALWAYS)

const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/*', (_, res) => {
    res.json({data: "AYYYYYYYY LAMMMMMOOOOOOOOO"})
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})