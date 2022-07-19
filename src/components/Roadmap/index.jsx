import React from 'react'


import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import "swiper/css";
import "swiper/css/navigation";
import { Box, HStack, Text, VStack, Image, Flex, Stack, Grid, Link } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const roadmaps = [
  {
    title: 'Forte da Tapera',
    city: 'Paraty',
    description: 'O Forte da Tapera é um dos 7 Fortes de Paraty e está bem de frente para a baía em um ótimo ponto estratégico, que antes era usado como defesa, e hoje é um dos mais incríveis mirantes da região acessível apenas de barco ou lancha.',
    image: '/images/forte-tapera.jpg'
  },
  {
    title: 'Engenho D`água',
    city: 'Paraty',
    description: 'Praia de águas calmas, cristalinas e deserta, vale destacar que fui em uma segunda-feira, dia de baixa temporada e de muito sol, o que faz toda a diferença no visual e na tranquilidade. O acesso é através de barco no saco do Mamanguá, o local conta com trilhas e algumas das mais belas paisagens de Paraty.',
    image: '/images/engenho-dagua.jpg'
  },
  {
    title: 'Praia do Chicopê',
    city: 'Paraty',
    description: 'Agua mansa, morna, verde transparente, propícia a banhos. Rochas ao redor com vegetação de Mata Atlântica misturada a gramíneas, coqueiros e cactos.',
    image: '/images/chicope.jpg'
  },
  {
    title: 'Ilha do Cedro',
    city: 'Paraty',
    description: 'Uma das ilhas mais procuradas da região, com águas calmas e cristalinas, ideal para aproveitar um mergulho ou aproveitar em família',
    image: '/images/ilha-do-cedro.jpg'
  },
  {
    title: 'Ilha do Cachorro',
    city: 'Paraty',
    description: 'Ilha icônica em Paraty cercada por águas cristalinas onde é possível acesso somente de barco.',
    image: '/images/ilha-do-cachorro.jpg'
  }
]


export default function Roadmap() {
  
    return (
        
 
        <Box as={Swiper}
          name="charters"
        
          w="100%"
         
            display="flex"
             alignItems="center" 
             justifyContent="center"
             spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            modules={Navigation}
            className="mySwiper"
            scrollbar={{ draggable: true }}
            autoplay={{delay: 6000,  disableOnInteraction: false}}
          speed={1200}

             >
        {
          roadmaps.map((item,index) => {

            return (
              
              <SwiperSlide key={index}>
               
                
                
                <Box as={Flex} justifyContent="center" width="100%" height="80vh" >
               
                  <Image src={item.image} width="100%" height="100%" objectFit="cover" position="absolute" filter="brightness(70%)"/>
                  
                  <VStack alignItems="flex-start" spacing={10}  
                  padding="10px"
                  justifySelf="flex-start"
                  maxW="1200px"
                  width="100%"
                  alignSelf="flex-start"
                  borderRadius="5px"
                  paddingY="50px"
                 
              >
                <VStack alignItems="flex-start"  zIndex={5}>
                <Text textShadow="0 4px 30px rgba(0, 0, 0, 0.1)" fontSize="5xl" color="#E7C496" fontWeight="semibold">{item.title}</Text>
                <Text textShadow="0 4px 30px rgba(0, 0, 0, 0.1)" color="#E7C496" fontSize="2xl">{item.city}</Text>
                </VStack>

                <VStack padding="8px"
                 background="rgba(255, 255, 255, 0.2)"
                 boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
                 backdropFilter="blur(10px)"
                 css={{
                   WebkitBackdropFilter: "blur(10px)"
                 }}
                >
                  <Text fontSize="xl" color="whiteAlpha.900" textAlign="justify">{item.description}</Text>
                </VStack>
              </VStack>
                
                </Box>

             
                
          
              
            </SwiperSlide>
            
            )

          }

          
            
          )
        }

      </Box>
  
    )
  
}
