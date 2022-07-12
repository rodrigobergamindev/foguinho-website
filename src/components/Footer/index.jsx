import { Box, Flex, Grid, Heading, HStack, Icon, Image, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiMailLine, RiPhoneFill, RiWhatsappLine } from 'react-icons/ri'
import FormWhats from '../FormWhats'
import FooterContent from './FooterContent'


export default function Footer() {
  return (
    <VStack height="" background="#448B8B" spacing={40}>
     
        <FormWhats/>
        <FooterContent/>

       
          
          <HStack zIndex={30} justifyContent="space-between" width="100%" maxWidth="1200px"  fontFamily="Poppins">
            

            <VStack alignItems="flex-start" width="100%">
              <Text fontSize="50px" fontWeight="bold" color="white">FOGUINHO</Text>

             
              <Text color="white">Rua Caraipe das Águas, 1194 - Sobre Loja</Text>
              <Text color="white">Jardim dos Ypês – São Paulo, SP</Text>
              <Text color="white">CEP: 08161-360</Text>
            </VStack>

            <VStack alignItems="flex-start" alignSelf="flex-start" width="100%">
                    <Box as={VStack}  alignItems="flex-start" color="white">
                        <Heading fontWeight="bold" fontSize="lg" letterSpacing={3} color="#E7C496">MAPA DO SITE</Heading>
                        <StackDivider/>
                        <StackDivider/>
                        <HStack>
                          <Text cursor="pointer" transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Início</Text>
                        </HStack>

                        <HStack>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Roteiros</Text>
                        </HStack>
                     
                        <HStack>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Sobre</Text>
                        </HStack>
                       
                        <HStack>
                          <Text cursor="pointer"  transition="all 0.3s ease-in-out" _hover={{color:"#E7C496"}}>Contato</Text>
                        </HStack>
                        
                    </Box>
            </VStack>

            <VStack alignItems="flex-start" alignSelf="flex-start" width="100%">
                    <Box as={VStack}  alignItems="flex-start" color="whiteAlpha.900">
                        <Heading fontWeight="bold" fontSize="lg" letterSpacing={3} color="#E7C496">CONTATO</Heading>
                        <StackDivider/>
                        <StackDivider/>
                        <HStack>
                        <Icon as={RiMailLine} fontSize="20"/><Text>foguinho_embarcacoes@gmail.com</Text>
                        </HStack>

                        <HStack>
                        <Icon as={RiWhatsappLine} fontSize="20"/><Text>(11) 96329-0492</Text>
                        </HStack>
                     
                        <HStack>
                        <Icon as={RiPhoneFill} fontSize="20"/><Text>(11) 4277-1012</Text>
                        </HStack>
                       

                        
                    </Box>
            </VStack>

           
          </HStack>
       
    </VStack>
  )
}
