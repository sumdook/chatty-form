const theme = {
  colors: {
    primary: '#198cff',
    secondary: '#e2e8f0',
    text: {
      question: 'white',
      answer: 'black',
    },
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [0, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    regular: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: {
    xs: 3,
    sm: 5,
    md: 15,
    lg: 20,
    circle: 99999,
  },
  shadows: {
    default: '2px 2px 4px rgba(0, 0, 0, .2)',
    input: '1px 1px 7px rgba(0, 0, 0, .2)',
    button: '1px 1px 4px rgba(0, 0, 0, .1)',
  },
  // rebass variants
  text: {
    question: {
      fontFamily: 'default',
      lineHeight: 'tight',
      fontWeight: 'semibold',
      color: 'text.question',
    },
    answer: {
      fontFamily: 'default',
      lineHeight: 'tight',
      fontWeight: 'semibold',
      color: 'text.answer',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    question: {
      p: 3,
      my: 2,
      bg: 'primary',
      borderRadius: 'lg',
      borderBottomLeftRadius: 'xs',
      boxShadow: 'default',
      transition: 'color 0.3s, background 0.3s',
    },
    pretext: {
      p: 3,
      mt: 1,
      borderRadius: 'lg',
      bg: 'primary',
      boxShadow: 'default',
      transition: 'color 0.3s, background 0.3s',
    },
    answer: {
      p: 3,
      my: 3,
      bg: 'secondary',
      borderRadius: 'lg',
      borderBottomRightRadius: 'xs',
      boxShadow: 'default',
      transition: 'color 0.3s, background 0.3s',
    },
    inputContainer: {
      p: 2,
      borderRadius: 'md',
      boxShadow: 'input',
    },
  },
  forms: {
    input: {
      mr: 20,
      borderColor: 'transparent',
    },
  },
  buttons: {
    default: {
      cursor: 'pointer',
      fontSize: 3,
      transition: 'color 0.3s, background 0.3s',
    },
    input: {
      variant: 'buttons.default',
      color: 'white',
      bg: 'primary',
      borderRadius: 'md',
    },
    select: {
      variant: 'buttons.default',
      color: 'black',
      bg: '#e2e8f0',
      mr: 2,
      mb: 2,
      '&:hover': {
        bg: '#cbd5e0',
      },
    },
    selected: {
      variant: 'buttons.default',
      color: 'white',
      bg: 'primary',
      mr: 2,
      mb: 2,
    },
    action: {
      variant: 'buttons.default',
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      mb: 2,
    },
  },
};

export default theme;
