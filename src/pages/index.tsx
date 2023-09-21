import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius={'md'}
        bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.50')}
        mb={5}
        p={2.5}
        textAlign={'center'}
      >
        Hi, I&apos;m a fullstack developer based on Spain!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant={'page-tittle'}>
            Jose Soto / yinnohs
          </Heading>
          <p>
            Fullstack Developer ( 🧑‍💻Developer / 🎨UX/UI Designer / 🧪Tester )
          </p>
        </Box>
        <Box
          flexShrink={0}
          display={{
            md: 'flex',
            sm: 'flex'
          }}
          justifyContent={'center'}
          alignItems={'center'}
          mt={{ base: 5, md: 0 }}
          ml={{ md: 6 }}
        >
          <Image
            alt="profile photo of yinnohs"
            borderColor={'whiteAlpha.800'}
            borderWidth={4}
            borderStyle={'solid'}
            maxWidth={'110px'}
            display={'inline-block'}
            borderRadius={'full'}
            src="/images/yinnoh.png"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
