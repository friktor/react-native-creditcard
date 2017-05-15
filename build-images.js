const lists = require('./src/CardInfo/banksAndPrefixes')
const fs = require('fs')

var banks = []
for (var key in lists.banks) {
  banks.push(lists.banks[key])
}

var images = {
  brands: {},
  banks: {}
}

banks
  .map((bank) => {
    var bitmap = fs.readFileSync('./src/images/banks/'+bank.logoPng)
    return { filename: bank.logoPng, base64: 'data:png;base64,'+new Buffer(bitmap).toString('base64') }
  })

  .forEach(({ filename, base64 }) => {
    images.banks[filename] = base64
  })

fs
  .readdirSync('./src/images/brands/')
  .filter((b) => (b.split('.')[1] == 'png') )
  .forEach((filename) => {
    var bitmap = fs.readFileSync('./src/images/brands/'+filename)
    images.brands[filename] = 'data:png;base64,'+new Buffer(bitmap).toString('base64')
  })

fs.writeFileSync('./build/CreditCard/logos.js', 
`
module.exports = {
  banks: ${JSON.stringify(images.banks, null, 2)},
  brands: ${JSON.stringify(images.brands, null, 2)}
}
`.trim(), 'utf-8')

process.exit(0)