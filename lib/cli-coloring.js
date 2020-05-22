const { colors, end } = require("./colors")

const clr = {}

for ( let key in colors ) {
  clr[key] = function ( string ) {
    return colors[key] + string + end
  }
}

module.exports = clr