import * as express from 'express'

const app:express.Express = express()
const port:number = 8000

app.get('/test', (req:express.Request, res:express.Response) => {
  console.log(req)
  res.send({name: "soenja", age:33, friends:['kdj', 'dljfl']})
})

app.post('/test', (req, res) => {
  res.send({person:'kim'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})