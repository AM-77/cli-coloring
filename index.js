const colors = require("./lib/colors")

const console_colors = {

    // text styling
    bold: (text) => {
        this._text = text || ""
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

}