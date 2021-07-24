import * as express from 'express'
import {Cat, CatType} from './cats/app.model'

const app:express.Express = express()
/** middleware example */
app.use((req, res, next) => {
  console.log(req.rawHeaders[1])
  console.log('this is logging middleware')
  next();
})
/** middleware for one endpoint */
app.get('/cats/som',(req, res, next) => {
  console.log(req.rawHeaders[1])
  console.log('this is som middleware')
  next();
})

const data = [1, 2, 3, 4]
/** router */
app.get('/', (req:express.Request, res:express.Response) => {
  res.send({cats: Cat})
})

app.get('/cats/blue', (req, res) => {
  res.send({cats: Cat, blue: Cat[0]})
})
app.get('/cats/som', (req, res) => {
  res.send({some: Cat[1]})
})

/** random address */
app.use((req, res, next) => {
  console.log('this is error middleware')
  res.send({error:'404 not found error'})
})

app.listen(8000, () => {
  console.log('server is...')
})