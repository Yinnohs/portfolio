import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Section from '../components/Section'
import { Paragraph } from '../components/Paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

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
            borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.800')}
            borderWidth={2}
            borderStyle={'solid'}
            maxWidth={'110px'}
            display={'inline-block'}
            borderRadius={'full'}
            src="/images/yinnoh.png"
          />
        </Box>
      </Box>
      <Section delay={'0.1'}>
        <Heading as={'h3'} variant={'section-title'}>
          Projects
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit est
          earum modi ad quibusdam voluptatibus, soluta nam voluptatem quaerat?
          Officia non explicabo nostrum perferendis quo quaerat accusamus totam!
          Natus, quos?{' '}
          <Link as={NextLink} href="/projects/oathserver">
            Oath Server
          </Link>
        </Paragraph>
        <Box
          display={{ md: 'flex', sm: 'flex' }}
          my={4}
          justifyContent={'center'}
        >
          <Link as={NextLink} href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Check My Work
            </Button>
          </Link>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
