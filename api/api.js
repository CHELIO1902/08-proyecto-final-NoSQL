import express from 'express';
import { userRoutes, registerLoginRoutes, productRoutes } from './routes/index.js';
import { authValidator } from './middlewares/index.js';

const api = express()

api.use(express.json())

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})
//registro de rutas
api.use(registerLoginRoutes)
api.use(authValidator);
api.use(userRoutes)
api.use(productRoutes)

export default api;
