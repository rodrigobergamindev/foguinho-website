import { Box, Grid, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckFill, RiMailLine, RiMailSendFill, RiWhatsappFill, RiWhatsappLine } from 'react-icons/ri'

export default function About() {
  return (
    <VStack name="sobre" backgroundColor="#448B8B" alignItems="center" justifyContent="center" spacing={10} paddingTop={20} boxShadow="inset 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)" >
        <Grid
        paddingY={20}
       
        gap={[10,10]} w="100%"
            maxW="1200px" templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]}  justifyItems="center" padding="10px"
            backgroundColor="#448B8B"
            >
              <VStack padding={['0','10px']} spacing={[0,20]}>
              <Image src='/images/perfil.jpg' width={["350px","450px"]} height={["350px","auto"]} objectFit={["cover","fill"]} borderRadius="2px" boxShadow={["0","20px  20px white"]}/>

              </VStack>


              <VStack spacing={10}>
              <Box  width="100%" borderColor="white" borderStyle="solid" borderTopWidth={["0","4px"]} borderRightWidth={["0","4px"]} paddingTop={["0","25px"]} paddingRight={["0","55px"]} >
              <Text fontSize="20px" letterSpacing="2px" fontWeight="semibold" color="#E7C496">UM POUCO SOBRE MIM</Text>

              <VStack spacing={[5,10]} marginTop="10px" maxW="350px" width="100%" textAlign="justify">
                <Text color="whiteAlpha.900">
                Eu sou Leonardo Valente, marinheiro inscrito e habilitado pela Agencia da Capitanias dos Portos de Paraty, 
                com uma vasta experiência de mais de 6 anos em turismo e navegação, por muito tempo da minha vida morei a bordo 
                de um veleiro onde obtive a maior parte da minha vivência marítima, velejei nas mais diversas ilhas de Paraty, 
                onde pude conhecer sobre rotas, navegação e os pontos principais visitados por milhares de turistas todos os anos.
                </Text>

                <Text color="whiteAlpha.900">
                Nos meus charters, você poderá encontrar roteiros para Ilha do Cedro, Ilha do Cachorro, Forte da Tapera, Praia do Chicopê, Engenho D'água e muitas outras ilhas e pontos paradísiacos em Paraty.
                </Text>

                <Text color="whiteAlpha.900">
                Viaje com quem entende e conhece a região, viaje com a Foguinho.
                </Text>

                <VStack alignItems="flex-start" alignSelf="flex-start" fontFamily="Poppins">
                  <Text color="#E7C496" fontSize={["lg","2xl"]} fontWeight="bold">CIR 386A2018003181</Text>
                  <Text color="#E7C496" fontSize={["2xl","4xl"]}>LEONARDO VALENTE</Text>
                </VStack>
              </VStack>
              </Box>

              </VStack>
        </Grid>

        <Box w="100%" height="100%"  backgroundColor="whiteAlpha.500">
        <Grid gap={[10,10]} w="100%"
            maxW="1200px" templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]}  justifyItems="center"  padding={[5,20]}
            margin="0 auto"
            paddingBottom={20}
            >
              
              <VStack>
              <Box as={VStack} alignItems="flex-start"  spacing={10} width="100%" paddingTop="25px" paddingRight="55px">
              
              <VStack alignItems="flex-start" borderTopWidth="2px" paddingY="10px">
              <Text fontSize="12px" fontWeight="medium" letterSpacing="3px" color="whiteAlpha.900">VENHA VIAJAR COM A FOGUINHO</Text>
              <Text fontSize="20px" letterSpacing="2px" fontWeight="semibold" color="#448B8B">ALGUNS DIFERENCIAIS DOS NOSSOS CHARTERS</Text>
              <Box width="20%" height="2px"  marginTop="10px"/>
              </VStack>
              <VStack spacing={5} marginTop="10px" maxW="350px" width="100%" alignItems="flex-start" justifyContent="flex-start">
                 
                <HStack  spacing={5}>
                        <Icon as={RiCheckFill} color="#448B8B" backgroundColor="whiteAlpha.900" borderRadius="100%" padding="2px" fontWeight="bold" fontSize={["2xl", "2xl"]}/>
                        <Text fontSize={["md","lg"]} color="whiteAlpha.900">Marinheiro com vasta experiência nas ilhas de Paraty</Text>
                </HStack>
           
                <HStack spacing={5}>
                        <Icon as={RiCheckFill} color="#448B8B" backgroundColor="whiteAlpha.900" borderRadius="100%" padding="2px" fontWeight="bold" fontSize={["2xl", "2xl"]}/>
                        <Text fontSize={["md","lg"]} color="whiteAlpha.900">Todos os passeios possuem 6 horas de duração, com até 3 paradas</Text>
                </HStack>

                <HStack spacing={5}>
                        <Icon as={RiCheckFill} color="#448B8B" backgroundColor="whiteAlpha.900" borderRadius="100%" padding="2px" fontWeight="bold" fontSize={["2xl", "2xl"]}/>
                        <Text fontSize={["md","lg"]} color="whiteAlpha.900">Embarque geralmente as 9h e desembarque às 15h ou conforme no horário acertado com o cliente</Text>
                </HStack>

                <HStack spacing={5}>
                        <Icon as={RiCheckFill} color="#448B8B" backgroundColor="whiteAlpha.900" borderRadius="100%" padding="2px" fontWeight="bold" fontSize={["2xl", "2xl"]}/>
                        <Text fontSize={["md","lg"]} color="whiteAlpha.900">Roteiros personalizados de acordo com a preferência do cliente</Text>
                </HStack>
              </VStack>

              <HStack marginTop="30px" backgroundColor="#448B8B" paddingY="7px" borderRadius="5px" w="100%" maxWidth="300px" justifyContent="center" transition="all 0.3s ease" cursor="pointer" _hover={{
                filter: "brightness(85%)"
              }}>
                <a 
      href="https://api.whatsapp.com/send?phone=5524998566564&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20charters"
      target="_blank"
      rel="noreferrer"
      >
                <Text color="whiteAlpha.900" fontWeight="bold" fontSize="17px">ME CHAME PELO WHATSAPP</Text>
                </a>
                <Icon as={RiWhatsappFill} color="whiteAlpha.900"  borderRadius="100%" padding="2px" fontWeight="bold" fontSize="22px"/>
              </HStack>
              </Box>
              </VStack>

              <VStack alignItems="center">
              <Image src='/images/foguinho.jpg' borderRadius="4px" height={["350px","650px"]} width="100%" objectFit="cover" filter="brightness(90%)" alt='Embarcação Foguinho' />

              </VStack>
        </Grid>
        </Box>
    </VStack>
  )
}
