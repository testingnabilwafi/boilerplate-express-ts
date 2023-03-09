import { Router } from 'express'
import { index } from '../controllers/api/hello.controller'

const apiRouter = Router()

apiRouter.get('/', index)

export default apiRouter
