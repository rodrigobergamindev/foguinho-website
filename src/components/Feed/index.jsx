import { Box, Button, Flex, Grid, Heading, HStack, Icon, Image, Stack, Text, VStack } from '@chakra-ui/react'

import React from 'react'


export default function Feed() {
    return (
        <Stack 
           spacing={10} 
            align="center" 
            justify="center"
            w="100%"
            p={[5,20]}
            flexDirection="column"
            backgroundColor="#448B8B"
            >

            
           <Stack  maxWidth="1200px" width="100%" flex="1" direction="column" spacing="15">

        <Grid borderRadius="5px" gap={10} templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]} width="100%"  bg="#E7C496" p={10} boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)">
            <VStack spacing="7">
        <Heading alignSelf="flex-start" fontSize={["2xl","4xl"]} fontWeight="normal" color="white">Conheça o nosso <strong>Instagram</strong></Heading>
        
            <Text alignSelf="flex-start" fontSize={["lg","2xl"]} color="white" >Fique sempre por dentro das nossas novidades em primeira mão!</Text>
        </VStack>

        <Flex align="center" justify="center">
            <HStack background="#448B8B" padding="25px" borderRadius="5px" cursor="pointer" transition="all 0.3s ease" _hover={{
                filter: "brightness(90%)"
            }}>
                <Image src="/icons/instagram.svg" width="30px"/>
            <Text fontWeight="light" fontSize="xl" color="white">@foguinho_embarcacoes</Text>
            </HStack>
        </Flex>
        </Grid>

        <Box width="100%">
        
        </Box>


        </Stack> 
        
              
            </Stack>
    )
}
