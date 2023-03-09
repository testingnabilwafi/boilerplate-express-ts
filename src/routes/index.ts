import type { Application, Router } from 'express'

import homeRouter from './home.router'
import apiRouter from './api.router'

const _routes: Array<[string, Router]> = [
  ['/', homeRouter],
  ['/api', apiRouter]
]

const routes = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

export default routes
