const { colors, end } = require("./colors")

const cli_coloring = {}

for ( let key in colors ) {
  cli_coloring[key] = function (text) {
    return colors[key] + text + end
  }
}

module.exports = cli_coloring