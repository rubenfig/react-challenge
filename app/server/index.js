const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const { authors, publications } = require('./data')

app.use(bodyParser())
app.use(morgan('dev'))
app.use(express.static(path.resolve('app/public')))

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve('app/public/index.html'))
})

app.get('/authors', (req, res, next) => {
  res.json({ data: authors })
})

app.get('/authors/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  const author = authors.filter(a => a.id === id)[0]
  res.json({ data: author })
})

app.get('/authors/:id/publications', (req, res, next) => {
  const id = parseInt(req.params.id)
  const author = authors.filter(a => a.id === id)[0]
  const pubs = publications.filter(p => p.authorId === id)
  const data = { ...author, publications: pubs }
  res.json({ data })
})

app.get('/publications', (req, res, next) => {
  res.json({ data: publications })
})

app.get('/search/:searchTerm', (req, res, next) => {
  const searchTerm = req.params.searchTerm.toLowerCase()
  const results = publications.filter(p => p.title.toLowerCase().includes(searchTerm))
  res.json({ data: results })
}) 

app.use((req, res, next) => {
  res.json('Not found')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
