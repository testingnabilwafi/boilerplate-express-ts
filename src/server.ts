import express from 'express'
import logger from './utils/logger'
import bodyParser from 'body-parser'

import type { Application } from 'express'
import routes from './routes'
import path from 'path'

const app: Application = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static('src/public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

routes(app)

app.listen(process.env.PORT ?? 3000, () => {
  logger.info('Server is running on port 3000')
})
