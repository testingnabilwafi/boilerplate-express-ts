import type { Application, Router } from 'express'

import apiRouter from './api.router'

const _routes: Array<[string, Router]> = [['/api', apiRouter]]

const routes = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

export default routes
