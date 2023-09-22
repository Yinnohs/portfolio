import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e0cb', '#101010')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 28,
        textUnderlineOffset: 6,
        textDecorationColor: '#323232',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'bio-title': {
        fontSize: 24,
        marginY: 3
      },
      'bio-sub-title': {
        fontSize: 18,
        marginY: 2
      }
    }
  },

  Link: {
    baseStyle: props => ({
      color: mode('teal', 'teal')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  glassTeal: 'teal'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const Apptheme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})
