import { Router } from 'express'
import { index } from '../controllers/home.controller'

const homeRouter = Router()

homeRouter.get('/', index)

export default homeRouter
