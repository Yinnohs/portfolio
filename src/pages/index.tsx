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
      <Box display={{ md: 'flex', flexDirection: 'row' }} flexGrow={1}>
        <Heading as="h2" variant={'page-tittle'}>
          Jose Soto / yinnohs
        </Heading>
        <p>Fullstack Developer ( 🧑‍💻Developer / 🎨UX/UI Designer / 🧪Tester )</p>
      </Box>
    </Container>
  )
}

export default Page
