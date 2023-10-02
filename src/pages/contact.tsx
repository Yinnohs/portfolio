import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'

const Contact = () => {
  return (
    <Container>
      <Box>
        <Heading as={'h2'} variant={'section-title'}>
          Contact
        </Heading>
        <Box
          borderRadius={'md'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.50')}
          mt={5}
          p={2.5}
          textAlign={'center'}
        >
          Want to connect ?
        </Box>
      </Box>
    </Container>
  )
}

export default Contact
