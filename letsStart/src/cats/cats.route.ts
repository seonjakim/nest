import {Cat, CatType} from './app.model'
import {Router} from 'express'
import { countReset } from 'console'

const router = Router()
/** Read: return all the cat data */
router.get('/cats', (req, res) => {
  try {
    const cats = Cat
    // throw new Error('db connect error')
    res.status(200).send({
      success: true,
      data: {
        cats,
      }
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message
    })
  }
})

/** Read: return certain cat data */
router.get('/cats/:id', (req, res) => {
  try {
    const params = req.params
    console.log(params)
    const cat = Cat.find((cat) => {
      return cat.id === params.id
    })
    // throw new Error('db connect error')
    res.status(200).send({
      success: true,
      data: {
        cat,
      }
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message
    })
  }
})

/** Create: add new cat breed */
router.post('/cats', (req, res) => {
  try{
    const data = req.body
    console.log(data)
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {data}
    })
  }catch(error){

  }
})

/** Update: cat data update => Put */
router.put('/cats/:id', (req, res) => {
  try {
    const params = req.params
    const body = req.body
    let result
    Cat.forEach(cat => {
      if (cat.id === params.id) {
        cat = body
        result = cat
      }
    })
    res.status(200).send({
      success: true,
      data: {
        cat: result
      }
    })
  } catch(error) {

  }
})

/** Update: partial data update => Patch */
router.patch('/cats/:id', (req, res) => {
  try {
    const params = req.params
    const body = req.body
    let result
    Cat.forEach(cat => {
      if (cat.id === params.id) {
        cat = {...cat, ...body}
        result = cat
      }
    })
    res.status(200).send({
      success: true,
      data: {
        cat: result
      }
    })
  } catch(error) {

  }
})

/** Delete */
router.delete('/cats/:id', (req, res) => {
  try{
    const params = req.params
    const newCat = Cat.filter((cat)=> cat.id !== params.id)

    res.status(200).send({
      success: true,
      data: newCat
    })
  } catch(error) {

  }
})

export default router