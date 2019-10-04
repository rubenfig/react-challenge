const momentRandom = require('moment-random')
const { loremIpsum } = require('lorem-ipsum')

const authors = [
  { id: 1, firstName: 'Blake', lastName: 'Zeiger', email: 'bz@sweatworks.net' },
  { id: 2, firstName: 'Ron', lastName: 'Smith', email: 'rs@sweatworks.net' },
  { id: 3, firstName: 'David', lastName: 'Beneway', email: 'db@sweatworks.net' },
  { id: 4, firstName: 'Franklin', lastName: 'Fowler', email: 'ff@sweatworks.net' },
]

const publications = [
  { id: 1, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 1 },
  { id: 2, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 1 },
  { id: 3, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 2 },
  { id: 4, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 3 },
  { id: 5, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 3 },
  { id: 6, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 3 },
  { id: 7, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 4 },
  { id: 8, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 2 },
  { id: 9, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 4 },
  { id: 10, title: loremIpsum({ count: 1 }), body: loremIpsum({ count: 4 }), date: momentRandom(), authorId: 3 }
]

module.exports = {
  authors,
  publications
}
