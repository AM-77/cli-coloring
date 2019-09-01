# cli-coloring

A simple text coloring for nodejs logs

## Installation

```
  npm install cli-coloring
```

## Usage in Javascript

###### Importing The Package

```javascript
  const cli_coloring = require("cli-coloring")
```

###### Text Styling:

```javascript
  console.log("bold text: ", cli_coloring.bold("Whatever world ."))
  console.log("dim text: ", cli_coloring.dim("Whatever world ."))
  console.log("italic text: ", cli_coloring.italic("Whatever world ."))
  console.log("underline text: ", cli_coloring.underline("Whatever world ."))
  console.log("inverse text: ", cli_coloring.inverse("Whatever world ."))
  console.log("strike text: ", cli_coloring.strike("Whatever world ."))
  console.log("hidden text: ", cli_coloring.hidden("Whatever world ."))
```
###### Text Coloring:

```javascript
  console.log("white text: ", cli_coloring.white("Whatever world ."))
  console.log("grey text: ", cli_coloring.grey("Whatever world ."))
  console.log("black text: ", cli_coloring.black("Whatever world ."))
  console.log("blue text: ", cli_coloring.blue("Whatever world ."))
  console.log("cyan text: ", cli_coloring.cyan("Whatever world ."))
  console.log("green text: ", cli_coloring.green("Whatever world ."))
  console.log("magenta text: ", cli_coloring.magenta("Whatever world ."))
  console.log("red text: ", cli_coloring.red("Whatever world ."))
  console.log("yellow text: ", cli_coloring.yellow("Whatever world ."))
```
###### Background Coloring:

```javascript
  console.log("white background: ", cli_coloring.bg.white("Whatever world ."))
  console.log("grey background: ", cli_coloring.bg.grey("Whatever world ."))
  console.log("black background: ", cli_coloring.bg.black("Whatever world ."))
  console.log("blue background: ", cli_coloring.bg.blue("Whatever world ."))
  console.log("cyan background: ", cli_coloring.bg.cyan("Whatever world ."))
  console.log("green background: ", cli_coloring.bg.green("Whatever world ."))
  console.log("magenta background: ", cli_coloring.bg.magenta("Whatever world ."))
  console.log("red background: ", cli_coloring.bg.red("Whatever world ."))
  console.log("yellow background: ", cli_coloring.bg.yellow("Whatever world ."))
```
