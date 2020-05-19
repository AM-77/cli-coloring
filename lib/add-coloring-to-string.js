const { colors, end } = require("./colors")

function add_coloring_to_string () {
  for ( let key in colors ) {
    String.prototype[key] = function () {
      return (colors[key] + this + end)
    }
  }
}

module.exports = add_coloring_to_string