module.exports = colors = {

    // end the styling
    end: "\x1B[0m",

    // text styles
    styles: {
        bold: '\x1B[1m',
        dim: '\x1B[2m',
        italic: '\x1B[3m',
        underline: '\x1B[4m',
        inverse: '\x1B[7m',
        strike: '\x1B[9m',
        hidden: '\x1B[8m'
    },

    //text colors
    colors: {
        white: '\x1B[37m',
        grey: '\x1B[90m',
        black: '\x1B[30m',
        blue: '\x1B[34m',
        cyan: '\x1B[36m',
        green: '\x1B[32m',
        magenta: '\x1B[35m',
        red: '\x1B[31m',
        yellow: '\x1B[33m'
    },

    // background colors
    background: {
        white: '\x1B[47m',
        grey: '\x1B[49;5;8m',
        black: '\x1B[40m',
        blue: '\x1B[44m',
        cyan: '\x1B[46m',
        green: '\x1B[42m',
        magenta: '\x1B[45m',
        red: '\x1B[41m',
        yellow: '\x1B[43m'
    }

}