import React, {useState} from 'react';


import DrawerMenu from './components/Drawer';
import { HStack, Icon, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About'
import Roadmap from './components/Roadmap';
import Feed from './components/Feed';
import Footer from './components/Footer';
import { RiWhatsappFill } from 'react-icons/ri';


function App() {


  return (
   
    <>
    
    
    

    

    <Header/>
    <About/>
    <Roadmap/>
    <Feed/>
    <Footer/>
        

    </>

  );
}

export default App;
