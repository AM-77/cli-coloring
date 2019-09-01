const cli_colors = require("./index")

// text styling testing
console.log("Text Styling Testing\n");

console.log("bold text: ", cli_colors.bold("Whatever world ."))
console.log("dim text: ", cli_colors.dim("Whatever world ."))
console.log("italic text: ", cli_colors.italic("Whatever world ."))
console.log("underline text: ", cli_colors.underline("Whatever world ."))
console.log("inverse text: ", cli_colors.inverse("Whatever world ."))
console.log("strike text: ", cli_colors.strike("Whatever world ."))
console.log("hidden text: ", cli_colors.hidden("Whatever world ."))

// text coloring testing
console.log("\nText Coloring Testing:");

console.log("white text: ", cli_colors.white("Whatever world ."))
console.log("grey text: ", cli_colors.grey("Whatever world ."))
console.log("black text: ", cli_colors.black("Whatever world ."))
console.log("blue text: ", cli_colors.blue("Whatever world ."))
console.log("cyan text: ", cli_colors.cyan("Whatever world ."))
console.log("green text: ", cli_colors.green("Whatever world ."))
console.log("magenta text: ", cli_colors.magenta("Whatever world ."))
console.log("red text: ", cli_colors.red("Whatever world ."))
console.log("yellow text: ", cli_colors.yellow("Whatever world ."))

// background coloring testing
console.log("\nBackground Coloring Testing:")
console.log("white background: ", cli_colors.bg.white("Whatever world ."))
console.log("grey background: ", cli_colors.bg.grey("Whatever world ."))
console.log("black background: ", cli_colors.bg.black("Whatever world ."))
console.log("blue background: ", cli_colors.bg.blue("Whatever world ."))
console.log("cyan background: ", cli_colors.bg.cyan("Whatever world ."))
console.log("green background: ", cli_colors.bg.green("Whatever world ."))
console.log("magenta background: ", cli_colors.bg.magenta("Whatever world ."))
console.log("red background: ", cli_colors.bg.red("Whatever world ."))
console.log("yellow background: ", cli_colors.bg.yellow("Whatever world ."))