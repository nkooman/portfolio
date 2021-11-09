import { ChakraProvider } from '@chakra-ui/react';
import { Fonts } from './config/Fonts';
import { theme } from './config/theme';
import { Fold } from './views/Fold';

export const App = () => (
  <ChakraProvider theme={theme} cssVarsRoot="html">
    <Fonts />
    <Fold />
  </ChakraProvider>
);
