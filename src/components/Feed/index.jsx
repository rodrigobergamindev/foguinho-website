import { Box, Button, Flex, Grid, Heading, HStack, Icon, Image, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



const images = [
    {
      image: '/images/carousel/1.jpg'
    },
    {
      image: '/images/carousel/3.jpg'
    },
    {
      image: '/images/carousel/4.jpg'
    },
    {
      image: '/images/carousel/5.jpg'
    },
    {
      image: '/images/carousel/6.jpg'
    },
    {
      image: '/images/carousel/7.jpg'
    },
    {
      image: '/images/carousel/8.jpg'
    },
    {
      image: '/images/carousel/9.jpg'
    },
    {
      image: '/images/carousel/10.jpg'
    }
  ]

export default function Feed() {

  const isWideVersion = useBreakpointValue ({
    base: false,
    lg: true
})


    return (
        <Stack 
           spacing={10} 
            align="center" 
            justify="center"
            w="100%"
            p={[5,20]}
            flexDirection="column"
            backgroundColor="#448B8B"
            paddingY={[20,"auto"]}
            >

            
           <Stack  maxWidth="1200px" width="100%" flex="1" direction="column" spacing="15">

        <Grid borderRadius="5px" gap={10} templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]} width="100%"  bg="#E7C496" p={10} boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)">
            <VStack spacing="7">
        <Heading alignSelf="flex-start" fontSize={["xl","4xl"]} fontWeight="normal" color="white">Conheça o meu <strong>Instagram</strong></Heading>
        
            <Text alignSelf="flex-start" fontSize={["lg","2xl"]} color="white" >Fique sempre por dentro das nossas novidades em primeira mão!</Text>
        </VStack>

        <Flex align="center" justify="center">
            <HStack background="#448B8B" padding={["15px","25px"]} borderRadius="5px" cursor="pointer" transition="all 0.3s ease" _hover={{
                filter: "brightness(90%)"
            }}>
                <Image src="/icons/instagram.svg" width="30px"/>
            <a href="https://www.instagram.com/leonardodiasvalente/" target="_blank"><Text fontWeight="light" fontSize={["lg","xl"]} color="white">@leonardodiasvalente</Text></a>
            </HStack>
        </Flex>
        </Grid>

        <Box width="100%" height={["450px","350px"]} paddingY={10}>
        <Box as={Swiper}
          
          w="100%"
         
            display="flex"
             alignItems="center" 
             justifyContent="center"
             spaceBetween={10}
            slidesPerView={isWideVersion? 4 : 1}
            className="mySwiper"
            scrollbar={{ draggable: true }}
            autoplay={{delay: 2500,  disableOnInteraction: false}}
          speed={1200}

             >
        {
          images.map((item,index) => {

            return (
              
              <SwiperSlide key={index}>
               
                
                
                <Box as={Flex} justifyContent="center" >
               
                  <Image src={item.image} width={["350px","250px"]} borderRadius="5px" height={["350px","250px"]} objectFit="cover" transition="all 0.3s ease"_hover={
                    {
                        filter: "brightness(70%)"
                    }
                  }/>
                
                </Box>

             
                
          
              
            </SwiperSlide>
            
            )

          }

          
            
          )
        }
        </Box>
        </Box>


        </Stack> 
        
              
            </Stack>
    )
}
