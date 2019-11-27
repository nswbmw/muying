const fs = require('fs')
const cheerio = require('cheerio')

const $ = cheerio.load(fs.readFileSync('./index.html', { encoding: 'utf8' }))
const arr = []

$('li.poem').each(function () {
  const elem = $(this)
  arr.push({
    title: elem.find('a').text().trim(),
    time: elem.find('time').text().trim(),
    content: elem.find('pre').text().trim()
  })
})

console.dir(arr, {depth: 10})
