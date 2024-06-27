import express from 'express'
const router = express.Router()
import data from './data.js'

router.use('/api/data', data)

export default router