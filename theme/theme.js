import palette from "./palette";
export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: "80rem",
  },
  fonts: {
    body: '"Inconsolata", monospace',
    heading: '"Inconsolata", monospace',
    monospace: '"Inconsolata", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: palette.mono[0],
    background: palette.mono[10],
    surface: palette.mono[12],
    underlay: palette.mono[8],
    primary: palette.mono[0],
    secondary: palette.mono[6],
    onPrimary: palette.mono[12],
    onSecondary: palette.mono[12],
    onBackground: palette.mono[0],
    onSurface: palette.mono[0],
    footerNavigationBackground: palette.mono[2],
    onFooterNavigationBackground: palette.mono[10],
    onFooterNavigationBackgroundHighlight: palette.mono[12],
    footerCreditsBackground: palette.mono[0],
    onFooterCreditsBackground: palette.mono[4],
    onFooterCreditsBackgroundHighlight: palette.mono[12],
  },
  shadows: {
    header: "0 0.1rem 0.3rem 0 rgba(0,0,0,.1)",
    card: "0 0.1rem 0.3rem 0 rgba(0,0,0,.1)",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "background",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      maxWidth: "48rem",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};