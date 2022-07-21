import { VStack, Text, HStack } from '@chakra-ui/react'
import { faAnglesDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Header() {
  return (
    <VStack width="100%" alignItems="center" justifyContent="center" height="100vh" spacing={10} overflow="hidden" name="inicio" className="inicio" id="inicio">
   
   <video
    autoPlay
    muted 
    loop={true}
    style={{
        
        width:"100%",
        height: "100vh",
        filter: "brightness(70%)",
        objectFit:"cover",
        position:"absolute",
        zIndex: -1,
    }}
    >
        <source src="/video/bg.mp4" type="video/mp4"/>
       
  </video> 


   <VStack alignSelf="center" maxWidth="1400px" width="100%" padding={20} alignItems="flex-start">
   <Text fontWeight="light" fontSize="7xl" color="white">
    DESBRAVE
    </Text> 
    
    <Text fontWeight="light" fontSize="7xl" color="white">
    DESCUBRA
    </Text>  

    <Text fontWeight="extrabold" fontSize="7xl" color="transparent" css={{
      WebkitTextStrokeWidth: '2px',
      WebkitTextStrokeColor: ' #E7C496'
    }}>
    AVENTURE-SE.
    </Text>

    
    </VStack>      
    <Link activeClass="active" 
                 className="sobre" 
                 to="sobre" 
                 spy={true} 
                 smooth={true} 
                 duration={500}><HStack alignSelf="center" transition="all 0.3s ease" _hover={{
      transform: 'translateY(2.1rem);'
    }}>
      <FontAwesomeIcon icon={faAnglesDown} cursor="pointer" color="white" fontWeight="light" fontSize="50px"/>
    </HStack>
    </Link>
    </VStack>
  )
}
