import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  fonts: {
    heading: 'Nagoda',
    body: 'Magnolia',
  },
  colors: {
    white: 'hsl(0, 100%, 95%)',
    black: 'hsl(0, 0%, 5%)',
    coffee: 'hsl(24, 38%, 36%)',
    camel: 'hsl(35, 27%, 52%)',
    almond: 'hsl(29, 41%, 88%)',
    olive: 'hsl(74, 19%, 36%)',
    rifle: 'hsl(80, 17%, 24%)'
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('almond', 'black')(props),
        color: mode('black', 'white')(props)
      }
    })
  }
});
