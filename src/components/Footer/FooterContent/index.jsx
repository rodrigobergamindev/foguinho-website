import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'

export default function FooterContent() {
  return (
    <VStack height="450px" width="100%">
    <Image src="/images/bg-footer.jpg" filter="brightness(70%)" height="100%" width="100%" objectFit="cover" zIndex={1}/>


    
    </VStack>  
  )
}
