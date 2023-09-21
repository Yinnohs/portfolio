import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import { Apptheme } from '../utils'
import { FontsPlusRounded } from '../components/fonts'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={Apptheme}>
      <FontsPlusRounded />
      <Layout router={router}>
        <Component {...pageProps} key={router?.route}></Component>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
