import express from 'express'
const app = express()
const PORT = 5000
import routes from './API/index.js'
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
})
