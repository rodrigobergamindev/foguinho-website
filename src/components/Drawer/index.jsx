import React, {useState} from 'react'
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
    Flex,
    Heading,
    Icon,
    Stack
  } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHome, faList, faLocationDot, faPhone, faCalendar,faRss ,faUser, faSignOut, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { RiFacebookBoxFill, RiWhatsappLine, RiCarLine,RiHomeLine, RiInstagramLine, RiMessageLine, RiGpsLine } from "react-icons/ri";
import {SiTelegram} from 'react-icons/si'

  

export default function DrawerMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const[activeInicio,setActiveInicio] = useState(false)
    const[activeSobre,setActiveSobre] = useState(false)
    const[activeRoteiros,setActiveRoteiros] = useState(false)
    const[activeContato,setActiveContato] = useState(false)
  
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
          size="full"
          
        >
          <DrawerOverlay />
          <DrawerContent p="4" background="#448B8B">
          
            <DrawerHeader>
            <DrawerCloseButton  color="white" fontSize="xl"  mt="6"/>
              <Heading fontWeight="semibold" color="white">Menu</Heading>
             
              
              </DrawerHeader>
  
            <DrawerBody overflow="hidden" >
            <VStack  height={"full"} justify="center" spacing="16" paddingX={20}>

            <VStack width="full" fontSize="6xl" alignItems="flex-start" cursor="pointer">

              
              
                <HStack 
                align="center" 
                justify="center" 
                _hover={{}} 
                onMouseOver={() => setActiveInicio(true)} 
                onMouseLeave={() => setActiveInicio(false)}
                
                >
                 
                
                <Text borderBottom="solid" color="white" fontWeight="semibold" borderColor="transparent" transition="all 0.3s ease-in-out" _hover={{
                    borderBottom:"solid",
                    borderColor:"#E7C496"
                 }}>Início</Text>

                <FontAwesomeIcon icon={faArrowRight} color="#E7C496" transition="all 0.3s ease" style={{
                  visibility: `${activeInicio? "visible": "hidden"}`,
                  transform: `${activeInicio? "translateX(50%)": "translateX(0%)"}`,
                  transition: "all 0.2s ease-in-out"
                  
                }}/>
                </HStack>
                   
             
              
              </VStack>
              
              <VStack width="full" fontSize="6xl" alignItems="flex-start" cursor="pointer">

                    
                
              
              <HStack 
              align="center" 
              justify="center" 
              _hover={{}} 
              onMouseOver={() => setActiveRoteiros(true)} 
              onMouseLeave={() => setActiveRoteiros(false)}

              >
              

              <Text borderBottom="solid" color="white" fontWeight="semibold" borderColor="transparent" transition="all 0.3s ease-in-out" _hover={{
                  borderBottom:"solid",
                  borderColor:"#E7C496"
              }}>Charters</Text>

              <FontAwesomeIcon icon={faArrowRight} color="#E7C496" transition="all 0.3s ease" style={{
                visibility: `${activeRoteiros? "visible": "hidden"}`,
                transform: `${activeRoteiros? "translateX(50%)": "translateX(0%)"}`,
                transition: "all 0.2s ease-in-out"
                
              }}/>
              </HStack>
                


              </VStack>

              <VStack width="full" fontSize="6xl" alignItems="flex-start" cursor="pointer">

                    
                
              
                <HStack 
                align="center" 
                justify="center" 
                _hover={{}} 
                onMouseOver={() => setActiveSobre(true)} 
                onMouseLeave={() => setActiveSobre(false)}

                >


                <Text borderBottom="solid" color="white" fontWeight="bold" borderColor="transparent" transition="all 0.3s ease-in-out" _hover={{
                    borderBottom:"solid",
                    borderColor:"#E7C496"
                }}>Sobre</Text>

                <FontAwesomeIcon icon={faArrowRight} color="#E7C496" transition="all 0.3s ease" style={{
                  visibility: `${activeSobre? "visible": "hidden"}`,
                  transform: `${activeSobre? "translateX(50%)": "translateX(0%)"}`,
                  transition: "all 0.2s ease-in-out"
                  
                }}/>
                </HStack>
                  


                </VStack>
                
              <VStack width="full" fontSize="6xl" alignItems="flex-start" cursor="pointer">

                    
                
              
              <HStack 
              align="center" 
              justify="center" 
              _hover={{}} 
              onMouseOver={() => setActiveContato(true)} 
              onMouseLeave={() => setActiveContato(false)}

              >
              

              <Text borderBottom="solid" color="white" fontWeight="bold" borderColor="transparent" transition="all 0.3s ease-in-out" _hover={{
                  borderBottom:"solid",
                  borderColor:"#E7C496"
              }}>Contato</Text>

              <FontAwesomeIcon icon={faArrowRight} color="#E7C496" transition="all 0.3s ease" style={{
                visibility: `${activeContato? "visible": "hidden"}`,
                transform: `${activeContato? "translateX(50%)": "translateX(0%)"}`,
                transition: "all 0.2s ease-in-out"
                
              }}/>
              </HStack>
                


              </VStack>

              

              


              <Stack p={5} direction="row" alignItems="center"  width="100%" >
            <a href="https://www.instagram.com/autocertocars/"rel="noreferrer" target="_blank">
                <Icon 
                fontSize="2xl" 
                color="gray.300"
                as={RiInstagramLine}
                transition="all 0.3s ease-in-out"
                cursor="pointer"
                _hover={{
                    color:"#E7C496"
                }} 
                />
            </a>

            <a href="https://www.facebook.com/autocertocars/" rel="noreferrer" target="_blank">
                <Icon 
                fontSize="2xl" 
                color="gray.300" 
                as={RiFacebookBoxFill}
                transition="all 0.3s ease-in-out"
                cursor="pointer"
                _hover={{
                    color:"#E7C496"
                }}
                />
            </a>

            <a href="https://api.whatsapp.com/send?phone=5511963290492&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20um%20ve%C3%ADculo."rel="noreferrer" target="_blank">
                <Icon fontSize="2xl" 
                color="gray.300" 
                as={RiWhatsappLine}
                transition="all 0.3s ease-in-out"
                cursor="pointer"
                _hover={{
                    color:"#E7C496"
                }} 
                />
            </a>

            <Box flex="1" width="100px" height="1px" backgroundColor="gray.50"/>
            
            <Icon as={RiGpsLine} color="#E7C496"/><Text color="#E7C496" fontWeight="light">Av. do Imperador, 4550 - São Miguel Paulista, São Paulo - SP, 08050-000</Text>
            </Stack>

          



            </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    )
}