import express from 'express'
const router = express.Router()

let arrayData

router.put('/aiGuess', (req, res) => {
    const aiGuess = req.body
    console.log(aiGuess)
    return res.json(aiGuess)
})

router.get('/', (req, res) => {
    return res.json(arrayData)
})

router.put('/', (req, res) => {
    arrayData = req.body
    console.log(new Date().toISOString(), req.body.map((val) => {
        return val === 1
    }).filter((val) => {
        return val === true
    }))
    return res.json({ sent: "sent" })
})

export default router