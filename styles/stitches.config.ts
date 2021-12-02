import { createStitches, globalCss, createTheme  } from "@stitches/react"

const { styled, css, theme } = createStitches({
    theme: {
        colors: {},
        space: {},
        fontSizes: {},
        fonts: {},
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
})

const light = createTheme({})

const dark = createTheme({})

const globalStyles = globalCss({
    "*": { boxSizing: "border-box" },
})

export default styled

export { css, globalStyles, light, dark }