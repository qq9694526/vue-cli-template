const packageJson  = require('./package.json')

module.exports = api => {
  api.extendPackage(packageJson)

  api.render('./template')
}
