import React from 'react'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Heading, HStack, Icon, Image, Input, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { Field, Formik, Form } from 'formik'



export default function FormWhats() {


    function validate(value) {
        let error
        if (!value) {
          error = 'This field is required'
        } 
        return error
      }


      const isWideVersion = useBreakpointValue ({
        base: false,
        lg: true
    })


  return (

    
  <Grid name="contato" className="contato" margin="0 auto" zIndex={3} borderRadius="5px" gap={10} templateColumns={["repeat(1,1fr)","repeat(2, 1fr)"]} width="100%" maxWidth="1200px"  bg="#E7C496" p={10} boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)">
            <VStack spacing="7" alignItems="flex-start" width="100%" >
            <Heading  color="white" fontWeight="light">
              Entre em <strong>Contato</strong>
            </Heading>
            <Formik
      initialValues={{ name: '', message: '' }}
      onSubmit={(values, actions) => {
        const {name, message} = values
       setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=5524998566564&text=Ol%C3%A1%2C%20meu%20nome%20é%20${name}%20${message}`)
        actions.resetForm()
       }, 1500)
      }}

    >
      {(props) => (
        <Form>
          <Field name='name' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='name' color="white" fontWeight="semibold">Nome</FormLabel>
                <Input {...field} id='name' placeholder='Informe seu nome...' width="250px" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

            
          <Field name='message' validate={validate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.message && form.touched.message}>
                <FormLabel htmlFor='message' color="white" fontWeight="semibold">Mensagem</FormLabel>
                <Input {...field} id='message' type="message" placeholder='Envie uma mensagem...' width="250px"/>
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>


          <Button
            mt={4}
            bg="white"
            isLoading={props.isSubmitting}
            type='submit'
            color="#E7C496"
          >
            Enviar
          </Button>
        
        </Form>
      )}
    </Formik>
          </VStack>

        <VStack align={["flex-start","center"]} justify={["flex-start","center"]} width="100%" height="100%" >
          <HStack alignSelf="flex-end" spacing={3}>
            <a href="https://www.facebook.com/leonardo.diasvalente" target="_blank"><Image src="/icons/facebook.svg" width="25px" height="25px" cursor="pointer" transition="all 0.3s ease" _hover={{
              transform:"rotateZ(360deg)"
            }}/></a>
            <a href="https://www.instagram.com/leonardodiasvalente/" target="_blank"><Image src="/icons/instagram.svg" width="25px" height="25px" cursor="pointer" transition="all 0.3s ease" _hover={{
              transform:"rotateZ(360deg)"
            }}/></a>
            <a href="https://api.whatsapp.com/send?phone=5524998566564&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20charters" target="_blank"><Image src="/icons/whatsapp.svg" width="25px" height="25px" cursor="pointer" transition="all 0.3s ease" _hover={{
              transform:"rotateZ(360deg)"
            }}/></a>
          </HStack>
          <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2291394413364!2d-44.71185408502827!3d-23.234747384846013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdee490548851e216!2zMjPCsDE0JzA1LjEiUyA0NMKwNDInMzQuOCJX!5e0!3m2!1spt-BR!2sbr!4v1658407458088!5m2!1spt-BR!2sbr" referrerpolicy="no-referrer-when-downgrade">

          </iframe>
        </VStack>
    </Grid>
  
   
    
  )
}
