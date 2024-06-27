import express from 'express'
const router = express.Router()

let arrayData

router.get('/', (req, res)=> {
    return res.json(arrayData)
})

router.post('/', (req, res)=>{
   arrayData = req.body
   console.log(new Date().toISOString(),req.body.map((val)=>{
    return val === 1
   }).filter((val)=>{
    return val === true
   }))
   return res.json({sent: "sent"})
})

export default router