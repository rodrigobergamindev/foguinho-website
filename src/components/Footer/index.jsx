import { Box, Flex, Grid, Heading, HStack, Icon, Image, StackDivider, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiMailLine, RiPhoneFill, RiWhatsappLine } from 'react-icons/ri'
import FormWhats from '../FormWhats'
import FooterContent from './FooterContent'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Footer() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
})


  return (
    <VStack background="#448B8B" spacing={[20,40]} >
     
        <FormWhats/>
        <FooterContent/>

       
          
          {isWideVersion && <Flex flexDirection={["column","row"]} zIndex={30}  width="100%" maxWidth="1200px"  fontFamily="Poppins"  >
            

            <VStack  height="100%" alignItems="flex-start" justifyContent="flex-start" width="100%">
              
              <HStack alignSelf="flex-start" justifySelf="flex-start"  width="100%" spacing={10}>
                <Image src="/images/logo-branco.png" width="150px" objectFit="contain" />
                <VStack fontSize={20} height="100%" spacing={4} width="100%" alignItems="flex-start" justifyContent="flex-start"> 
                  <Text color="white">Rodovia Rio-Santos, BR 101 - KM 578,7</Text>
                  <Text color="white">Boa Vista, Paraty - RJ</Text>

                </VStack>
              </HStack>

             
              
            </VStack>

            <VStack fontSize={20} alignItems="center" alignSelf="flex-start" width="100%">
                    <Box as={VStack}  alignItems="flex-start" color="white">
                        <Heading fontWeight="bold" fontSize="lg" letterSpacing={3} color="#E7C496">MAPA DO SITE</Heading>
                        <StackDivider/>
                        <StackDivider/>
                        <HStack>
                        <Link activeClass="active" 
                 className="inicio" 
                 to="inicio" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer" transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Início</Text>
                          </Link>
                        </HStack>

                        <HStack>
                        <Link activeClass="active" 
                 className="charters" 
                 to="charters" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Charters</Text>
                          </Link>
                        </HStack>
                     
                        <HStack>
                        <Link activeClass="active" 
                 className="sobre" 
                 to="sobre" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Sobre</Text>
                          </Link>
                        </HStack>
                       
                        <HStack>
                        <Link activeClass="active" 
                 className="contato" 
                 to="contato" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Contato</Text>
                          </Link>
                        </HStack>
                        
                    </Box>
            </VStack>

            <VStack fontSize={20} alignItems="center" alignSelf="flex-start" width="100%">
                    <Box as={VStack}  alignItems="flex-start" color="whiteAlpha.900">
                        <Heading fontWeight="bold" fontSize="lg" letterSpacing={3} color="#E7C496">CONTATO</Heading>
                        <StackDivider/>
                        <StackDivider/>
                        <HStack>
                        <Icon as={RiMailLine} fontSize="20"/><Text>telow@hotmail.com</Text>
                        </HStack>

                        <HStack>
                        <Icon as={RiWhatsappLine} fontSize="20"/><Text>(24) 99856-6564</Text>
                        </HStack>

                       

                        
                    </Box>
            </VStack>

           
          </Flex>}
       
          {!isWideVersion && 
          <VStack   zIndex={30} width="100%" maxWidth="1200px"  fontFamily="Poppins" spacing={10}  >
            

            <VStack paddingX={10} height="100%" alignItems="center" justifyContent="center" width="100%">
              
              <VStack alignItems="center" justifyContent="center" width="100%" spacing={10}>
                <Image src="/images/logo-branco.png" width="150px" objectFit="contain" />
                
              </VStack>

             
              
            </VStack>

            <VStack paddingX={10} fontSize={20} alignItems="center" justifyContent="center" width="100%">
                    <Box as={VStack}  alignItems="center" justifyContent="center" color="white">
                        <Heading fontWeight="bold" fontSize="lg" letterSpacing={3} color="#E7C496">MAPA DO SITE</Heading>
                        <StackDivider/>
                        <StackDivider/>
                        <HStack>
                        <Link activeClass="active" 
                 className="inicio" 
                 to="inicio" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer" transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}} fontSize="md">Início</Text>
                          </Link>
                        </HStack>

                        <HStack>
                        <Link activeClass="active" 
                 className="charters" 
                 to="charters" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}} fontSize="md">Charters</Text>
                          </Link>
                        </HStack>
                     
                        <HStack>
                        <Link activeClass="active" 
                 className="sobre" 
                 to="sobre" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}} fontSize="md">Sobre</Text>
                          </Link>
                        </HStack>
                       
                        <HStack>
                        <Link activeClass="active" 
                 className="contato" 
                 to="contato" 
                 spy={true} 
                 smooth={true} 
                 duration={500}>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}} fontSize="md">Contato</Text>
                          </Link>
                        </HStack>
                        
                    </Box>
            </VStack>

            <VStack paddingX={10} fontSize={20} alignItems="center" justifyContent="center" width="100%">
                    <Box as={VStack}  alignItems="center" justifyContent="center" color="whiteAlpha.900">
                        <Heading fontWeight="bold" fontSize="lg" letterSpacing={3} color="#E7C496">CONTATO</Heading>
                        <StackDivider/>
                        <StackDivider/>
                        <HStack>
                        <Icon as={RiMailLine} fontSize="20"/><Text fontSize="md">telow@hotmail.com</Text>
                        </HStack>

                        <HStack>
                        <Icon as={RiWhatsappLine} fontSize="20"/><Text fontSize="md">(24) 99856-6564</Text>
                        </HStack>

                       

                        
                    </Box>
            </VStack>
            

            <VStack paddingX={10} fontSize={20} alignItems="center" justifyContent="center" width="100%">
                    <Box as={VStack} alignItems="center" justifyContent="center" color="whiteAlpha.900">
                        <Heading fontWeight="bold" fontSize="lg" letterSpacing={3} color="#E7C496">LOCALIZAÇÃO</Heading>
                        <StackDivider/>
                        <StackDivider/>
                        
                        <Text fontSize="md">Marina Boa Vista</Text>
                        <Text fontSize="md">Rodovia Rio-Santos, BR 101 - KM 578,7</Text>
                        <Text fontSize="md">Boa Vista, Paraty - RJ</Text>
                        <Text fontSize="md">CEP: 23970-000</Text>
                    </Box>
            </VStack>

           
          </VStack>}
    </VStack>
  )
}
