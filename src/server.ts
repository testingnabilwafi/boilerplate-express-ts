import express from 'express'
import logger from './utils/logger'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import type { Application } from 'express'
import routes from './routes'

const app: Application = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  cors({
    credentials: true
  })
)
app.use(cookieParser())

routes(app)

app.listen(process.env.PORT ?? 3000, () => {
  logger.info('Server is running on port 3000')
})
