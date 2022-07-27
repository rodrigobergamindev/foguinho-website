
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, HStack, extendTheme, Text, Image } from '@chakra-ui/react';
import DrawerMenu from './components/Drawer';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const theme = extendTheme({
  fonts: {
    body: `'Raleway', sans-serif`,
  },
})

root.render(
  <>

  <ChakraProvider theme={theme}>

    <HStack zIndex={900} alignSelf="flex-end" position="fixed" top="10px" right="10px" fontFamily="Raleway">
    
    <Text color="#E7C496" fontWeight="semibold">MENU</Text>
      <DrawerMenu/>
    </HStack>    
  
    <App/>
  </ChakraProvider>

  </>
);


