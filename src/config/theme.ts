import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  } as ThemeConfig,
  fonts: {
    heading: 'Nagoda',
    body: 'Magnolia',
  },
  colors: {
    white: 'hsl(0deg, 0%, 90%)',
    black: 'hsl(0deg, 0%, 5%)',
    blue: 'hsl(197deg, 100%, 72%)',
    pink: 'hsl(337deg, 100%, 72%)',
    salmon: 'hsl(16deg, 100%, 72%)',
    orange: 'hsl(43deg, 100%, 72%)',
    yellow: 'hsl(69deg, 100%, 72%)'
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
