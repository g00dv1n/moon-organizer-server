const cheerio = require('cheerio')
const fs = require('fs')

const rawHtml = fs.readFileSync('./files/moon-phases/descriptions.html', 'utf-8')
const $ = cheerio.load(rawHtml)

const phasesDescs = $('.desc').get()
const resJson = {}

for (let el of phasesDescs) {
  const $desc = $(el)
  resJson[$desc.data('phase')] = $desc.html().trim()
}

fs.writeFileSync('./files/moon-phases/descriptions.json', JSON.stringify(resJson, null, 2))
