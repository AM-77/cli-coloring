const clr = require(".")

// Text styling testing
console.log("Text Styling Options:".bold());
console.log("bold text: ", clr.bold("Whatever world."))
console.log("dim text: ", clr.dim("Whatever world."))
console.log("italic text: ", clr.italic("Whatever world."))
console.log("underline text: ", clr.underline("Whatever world."))
console.log("inverse text: ", clr.inverse("Whatever world."))
console.log("strike text: ", clr.strike("Whatever world."))
console.log("hidden text: ", clr.hidden("Whatever world."))

// Text Options
console.log("\nText Color Options:".bold());
console.log("white text: ", clr.white("Whatever world."))
console.log("grey text: ", clr.grey("Whatever world."))
console.log("black text: ", clr.black("Whatever world."))
console.log("blue text: ", clr.blue("Whatever world."))
console.log("cyan text: ", clr.cyan("Whatever world."))
console.log("green text: ", clr.green("Whatever world."))
console.log("magenta text: ", clr.magenta("Whatever world."))
console.log("red text: ", clr.red("Whatever world."))
console.log("yellow text: ", clr.yellow("Whatever world."))

// Background Color Options
console.log("\nBackground Color Options:".bold())
console.log("white background: ", clr.bg_white("Whatever world."))
console.log("grey background: ", clr.bg_grey("Whatever world.".white()))
console.log("black background: ", clr.bg_black("Whatever world."))
console.log("blue background: ", clr.bg_blue("Whatever world."))
console.log("cyan background: ", clr.bg_cyan("Whatever world."))
console.log("green background: ", clr.bg_green("Whatever world."))
console.log("magenta background: ", clr.bg_magenta("Whatever world."))
console.log("red background: ", clr.bg_red("Whatever world."))
console.log("yellow background: ", clr.bg_yellow("Whatever world."))

// Nested Color & Style Options
console.log("\nNested Options:".bold())
console.log("italic underline text: ", clr.italic(clr.underline("Whatever world.")))
console.log("red bold blue background:", "Whatever World.".red().bold().bg_blue())