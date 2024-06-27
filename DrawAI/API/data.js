import express from 'express'
const router = express.Router()

router.get('/', (req, res)=> {
    return res.json({testing: "test"})
})

export default router