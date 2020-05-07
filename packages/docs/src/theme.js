import themeList from './theme-list';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.4,
    heading: 1.125,
  },
  colors: {
    text: '#707070',
    background: '#F7F9FA',
    primary: '#198CFF',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  radii: {
    default: 10,
    circle: '100%',
  },
  shadows: {
    default: '0px 0px 8px rgba(0, 0, 0, .25)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3, 4, 4],
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  layout: {
    container: {
      maxWidth: '1100px',
      mx: 'auto',
      px: [4, 5, 5],
    },
  },
  buttons: {
    primary: {
      bg: 'primary',
      cursor: 'pointer',
      color: 'white',
      fontWeight: '600',
      py: [2, 3, 3],
      fontSize: [1, 3, 3],
      borderRadius: 10,
      transition: 'color 0.3s, background 0.3s',
    },
    header: {
      variant: 'buttons.primary',
      py: 2,
      display: ['block', 'block', 'none'],
      mr: 3,
    },
    theme: {
      cursor: 'pointer',
      p: 0,
      height: [20, 35, 35],
      width: [20, 35, 35],
      borderRadius: 'circle',
      mr: 3,
      transition: '0.1s border',
    },
    'theme-selected': {
      variant: 'buttons.theme',
      height: [20, 35, 35],
      width: [20, 35, 35],
      border: '2px solid white',
      boxShadow: 'default',
    },
    icon: {
      height: 40,
      width: 40,
    },
  },
};

theme.colors.modes = Object.keys(themeList).reduce((acc, themeName) => {
  return { ...acc, [themeName]: { primary: themeList[themeName] } };
}, {});

export default theme;
