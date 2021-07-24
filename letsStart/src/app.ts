import * as express from 'express'
import catRouter from './cats/cats.route'

class Server {
  public app: express.Application

  constructor() {
    const app: express.Application = express()
    this.app = app
  }

  private setRoute() {
    this.app.use(catRouter)
  }

  private setMiddleware() {
    /** logging middleware */
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1])
      console.log('this is logging middleware')
      next();
    })

    /** middleware to read json */
    this.app.use(express.json())

    this.setRoute()

    /** 404 middleware */
    this.app.use((req, res, next) => {
      console.log('this is error middleware')
      res.send({error:'404 not found error'})
    })

  }
  public listen() {
    this.setMiddleware
    this.app.listen(8001, () => {
      console.log('server is...')
    })
  }
}

// const app:express.Express = express()
function init() {
  const server = new Server()
  server.listen()
}
init()