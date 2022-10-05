import express from 'express';
import { userRoutes } from './routes/index.js';

const api = express()

api.use(express.json())

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

//registro de rutas
api.use(userRoutes)

export default api;
