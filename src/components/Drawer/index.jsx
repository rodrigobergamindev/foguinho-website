import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    HStack,
    UnorderedList,
    ListItem,
    VStack,
    Text,
    Box,
    Avatar,
    Flex
  } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHome, faList, faLocationDot, faPhone, faCalendar,faRss ,faUser, faSignOut} from '@fortawesome/free-solid-svg-icons'



  

export default function DrawerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    

  
    return (
      <HStack  alignSelf="flex-end" alignItems="flex-end" justifySelf="space-between">
 
        <Button ref={btnRef} alignSelf="flex-end" backgroundColor="transparent" onClick={onOpen} padding="30px" _hover={{backgroundColor: 'transparent'}}>
          <FontAwesomeIcon size="1x" icon={faBars} color="#E7C496"/>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
            <VStack height={"full"} align="flex-start" marginTop={"16"} spacing="16">

            <VStack width="full">

                    
                
                <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faHome} fontSize="16px"/>Início</HStack>
                   
                  </Button>
              
                </VStack>
              
                <VStack width="full">
                  <Button colorScheme="blue" size='lg' width={"full"}>
                    <HStack align="center" justify="center"><FontAwesomeIcon icon={faUser} fontSize="16px"/><Text>Alterar Cadastro</Text></HStack>
                    
                  </Button>
                </VStack>
                

                
                <VStack width="full">

                    
                
                <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faCalendar} fontSize="16px"/>
                  <Text>Agenda</Text>
                  </HStack>
                   
                  </Button>
              
                </VStack>

                <VStack width="full">

                    
                
                <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faRss} fontSize="16px"/>
                  <Text>Novidades</Text></HStack>
                   
                  </Button>
              
                </VStack>
                


                <VStack width="full">
                  <Button colorScheme="blue" size='lg' width={"full"}>
                  <HStack align="center" justify="center"><FontAwesomeIcon icon={faSignOut} fontSize="16px"/>
                  
                  <Text>Sair</Text>
            
                  </HStack>
                  </Button>
                </VStack>


            </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    )
}