const plugin = require('tailwindcss/plugin')

const rem = (px) => `${px / 16}rem`

const clamp = (minSize, maxSize, minWidth, maxWidth) => {
  const v = Math.floor(((100 * (maxSize - minSize)) / (maxWidth - minWidth)) * 100) / 100
  const r = (minWidth * maxSize - maxWidth * minSize) / (minWidth - maxWidth)
  return `clamp(${rem(minSize)}, ${v}vw${rem(r) === '0rem' ? '' : ` + ${rem(r)}`}, ${rem(maxSize)})`
}

const getClampSize = (minSize, maxSize, minWidth = 370, maxWidth = 750) => {
  if (minSize - maxSize === 0 || !maxSize) {
    return `${rem(minSize)}`
  } else if (!minSize) {
    if (maxSize - 6 > 10) {
      return clamp(maxSize - 6, maxSize, minWidth, maxWidth)
    } else {
      return clamp(10, maxSize, minWidth, maxWidth)
    }
  } else {
    return clamp(minSize, maxSize, minWidth, maxWidth)
  }
}

const customClamp = plugin(function ({ matchUtilities }) {
  matchUtilities({
    'clamp-text': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'font-size': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-mt': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-top': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-mb': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-bottom': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-mr': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-right': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-ml': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-left': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-my': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-top': getClampSize(minSize, maxSize, minWidth, maxWidth),
        'margin-bottom': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-mx': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'margin-left': getClampSize(minSize, maxSize, minWidth, maxWidth),
        'margin-right': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },

    'clamp-pt': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'padding-top': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-pb': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'padding-bottom': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-pr': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'padding-right': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-pl': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'padding-left': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-py': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'padding-top': getClampSize(minSize, maxSize, minWidth, maxWidth),
        'padding-bottom': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-px': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        'padding-left': getClampSize(minSize, maxSize, minWidth, maxWidth),
        'padding-right': getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },

    'clamp-w': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        width: getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-h': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        height: getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },

    'clamp-top': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        top: getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-bottom': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        bottom: getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-right': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        right: getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
    'clamp-left': (value) => {
      const [minSize, maxSize, minWidth, maxWidth] = value.split(',').map((v) => {
        return Number(v)
      })
      return {
        left: getClampSize(minSize, maxSize, minWidth, maxWidth),
      }
    },
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  plugins: [customClamp],
}
