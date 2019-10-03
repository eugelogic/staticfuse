import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { Box, Text, Heading, Stack, Input, Textarea, Button } from '@chakra-ui/core'

const Contact = ({ location }) => {
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Contact" />
      <Box maxW="3xl" m="auto" py={4} my={4} px={2}>
        <Heading
          as="h1"
          fontWeight="600"
          fontSize="4rem"
          color="primary"
          lineHeight="1.1"
          mb={4}
        >
          Contact Us
        </Heading>
        <Text fontSize="md" fontWeight="500" color="gray.400">
          Chuck Norris originally appeared in the "Street Fighter II" video
          game, but was removed by Beta Testers because every button caused him
          to do a roundhouse kick. When asked bout this "glitch," Norris
          replied, "That's no glitch.".
        </Text>

        <Stack spacing={3}>
          <Input
            placeholder="Name"
          />
          <Input
            placeholder="Email"
          />
          <Textarea placeholder="Message" />
          <Button variantColor="blue">Submit</Button>
        </Stack>
      </Box>
    </Layout>
  )
}

export default Contact