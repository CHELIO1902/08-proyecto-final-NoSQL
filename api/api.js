import express from 'express';
//import { authRoutes, userRoutes, theaterRoutes } from './routes/index.js'

const api = express()

api.use(express.json())

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

export default api;
