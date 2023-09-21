import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius={'md'}
        bg={'teal.400'}
        mb={5}
        p={2.5}
        textAlign={'center'}
      >
        Hi, I&apos;m a fullstack developer based on Spain!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}></Box>
        <Heading as="h2" variant={'page-tittle'}>
          Jose Ignacio Soto Leon / yinnohs
        </Heading>
        <p>Fullstack Developer ( 🧑‍💻Developer / 🎨UX/UI Designer / 🧪Tester )</p>
      </Box>
    </Container>
  )
}

export default Page
