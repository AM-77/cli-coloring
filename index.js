const colors = require("./lib/colors")

const console_colors = {

    // text styling
    bold: (text) => {
        thconsole_colorsis._text = text || ""
        return colors.styles.bold + this._text + colors.end
    },
    dim: (text) => {
        this._text = text || ""
        return colors.styles.dim + this._text + colors.end
    },
    italic: (text) => {
        this._text = text || ""
        return colors.styles.italic + this._text + colors.end
    },
    underline: (text) => {
        this._text = text || ""
        return colors.styles.underline + this._text + colors.end
    },
    inverse: (text) => {
        this._text = text || ""
        return colors.styles.inverse + this._text + colors.end
    },
    strike: (text) => {
        this._text = text || ""
        return colors.styles.strike + this._text + colors.end
    },
    hidden: (text) => {
        this._text = text || ""
        return colors.styles.hidden + this._text + colors.end
    },


    // text coloring
    white: (text) => {
        this._text = text || ""
        return colors.colors.white + this._text + colors.end
    },
    grey: (text) => {
        this._text = text || ""
        return colors.colors.grey + this._text + colors.end
    },
    black: (text) => {
        this._text = text || ""
        return colors.colors.black + this._text + colors.end
    },
    blue: (text) => {
        this._text = text || ""
        return colors.colors.blue + this._text + colors.end
    },
    cyan: (text) => {
        this._text = text || ""
        return colors.colors.cyan + this._text + colors.end
    },
    green: (text) => {
        this._text = text || ""
        return colors.colors.green + this._text + colors.end
    },
    magenta: (text) => {
        this._text = text || ""
        return colors.colors.magenta + this._text + colors.end
    },
    red: (text) => {
        this._text = text || ""
        return colors.colors.red + this._text + colors.end
    },
    yellow: (text) => {
        this._text = text || ""
        return colors.colors.yellow + this._text + colors.end
    },

    // background coloring
    bg: {
        white: (text) => {
            this._text = text || ""
            return colors.background.white + this._text + colors.end
        },
        grey: (text) => {
            this._text = text || ""
            return colors.background.grey + this._text + colors.end
        },
        black: (text) => {
            this._text = text || ""
            return colors.background.black + this._text + colors.end
        },
        blue: (text) => {
            this._text = text || ""
            return colors.background.blue + this._text + colors.end
        },
        cyan: (text) => {
            this._text = text || ""
            return colors.background.cyan + this._text + colors.end
        },
        green: (text) => {
            this._text = text || ""
            return colors.background.green + this._text + colors.end
        },
        magenta: (text) => {
            this._text = text || ""
            return colors.background.magenta + this._text + colors.end
        },
        red: (text) => {
            this._text = text || ""
            return colors.background.red + this._text + colors.end
        },
        yellow: (text) => {
            this._text = text || ""
            return colors.background.yellow + this._text + colors.end
        }
    }

}

module.exports = console_colors