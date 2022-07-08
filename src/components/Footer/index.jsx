import { Flex, Grid, Heading, HStack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import FormWhats from '../FormWhats'
import FooterContent from './FooterContent'


export default function Footer() {
  return (
    <VStack height="100%" background="#448B8B"  spacing={-40}>
     
        <FormWhats/>
        <FooterContent/>
    </VStack>
  )
}
