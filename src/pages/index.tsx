import { Container , Box, Heading} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
        <Box borderRadius={'md'} bg={'red.500'} mb={5} p={2.5} textAlign={'center'}>
            Hi, I'm a fullstack developer based on Spain!
        </Box>
        <Box display={{md:'flex'}}>
        <Box flexGrow={1}></Box>
        <Heading as="h2" variant={"page-tittle"}>
            Jose Ignacio Soto Leon
        </Heading>
        <Heading as="h3" variant={"page-tittle"}>
            yinnohs
        </Heading>
        <p>Backend oriented fullstack Developer</p>
        </Box>
    </Container>
  )
}

export default Page
