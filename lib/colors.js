const colors = {
    // text styles
    bold: `\x1B[1m`,
    dim: `\x1B[2m`,
    italic: `\x1B[3m`,
    underline: `\x1B[4m`,
    inverse: `\x1B[7m`,
    strike: `\x1B[9m`,
    hidden: `\x1B[8m`,

    // text color
    white: `\x1B[37m`,
    grey: `\x1B[90m`,
    black: `\x1B[30m`,
    blue: `\x1B[34m`,
    cyan: `\x1B[36m`,
    green: `\x1B[32m`,
    magenta: `\x1B[35m`,
    red: `\x1B[31m`,
    yellow: `\x1B[33m`,

    // background color
    bg_white: `\x1B[47m`,
    bg_grey: `\x1B[49;5;8m`,
    bg_black: `\x1B[40m`,
    bg_blue: `\x1B[44m`,
    bg_cyan: `\x1B[46m`,
    bg_green: `\x1B[42m`,
    bg_magenta: `\x1B[45m`,
    bg_red: `\x1B[41m`,
    bg_yellow: `\x1B[43m`
}

// end of styling
const end = `\x1B[0m`

module.exports = { colors, end }