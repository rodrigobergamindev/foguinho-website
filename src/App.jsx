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
    <a 
      href="https://api.whatsapp.com/send?phone=5524998566564&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20charters"
      target="_blank"
      rel="noreferrer"
      >
        <Icon as={RiWhatsappFill}
        position="fixed"
        bottom={7}
        right={[3,10]}
        fontSize={["5xl","7xl"]}
        cursor= "pointer"
        transition= "all 0.3s ease-out"
        color="gray.50"
        backgroundColor="#38A169"
        borderRadius={["10px","20px"]}
        boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
        p={[2,3]}
        zIndex={20}
        _hover={{
          transform: "translateY(-10%)"
        }}
        /></a>
  
            

    </>

  );
}

export default App;
