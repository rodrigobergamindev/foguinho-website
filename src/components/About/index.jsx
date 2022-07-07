import { Box, Grid, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <VStack backgroundColor="#448B8B" paddingY={40}>
        <Grid gap={[0,10]} w="100%"
            maxW="1200px" templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]}  justifyItems="center" padding="10px"
     
            >
              <VStack alignItems="center">
              <Image src='https://images.unsplash.com/photo-1656653731059-4c93b1cd2382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' borderRadius="10px" height="650px" width="100%" objectFit="fill" alt='Leonardo Valente' />

              </VStack>
              <VStack>
              <Box  width="100%" borderColor="white" borderStyle="solid" borderTopWidth="4px" borderRightWidth="4px" paddingTop="25px" paddingRight="55px" >
              <Text fontSize="20px" letterSpacing="2px" fontWeight="semibold" color="#E7C496">UM POUCO SOBRE MIM</Text>

              <VStack spacing={10} marginTop="10px" maxW="350px" width="100%" textAlign="justify">
                <Text color="whiteAlpha.900">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                content here', making it look like readable English
                </Text>

                <Text color="whiteAlpha.900">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                as opposed to using 'Content here, content here', making it look like readable English
                </Text>

                <VStack alignItems="flex-start" alignSelf="flex-start" fontFamily="Poppins">
                  <Text color="#E7C496" fontSize="4xl">CIR 16599/22</Text>
                  <Text color="#E7C496" fontSize="4xl">LOREM IPSUM</Text>
                </VStack>
              </VStack>
              </Box>
              </VStack>
        </Grid>
    </VStack>
  )
}
