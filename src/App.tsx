import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Fonts } from './config/Fonts';
import { theme } from './config/theme';

export const App = () => (
  <ChakraProvider theme={theme} cssVarsRoot="html">
    <Fonts />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Heading fontSize="9xl">Nick Kooman</Heading>
          <Text fontSize="4xl">
            Full stack web developer at BizStream.
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
