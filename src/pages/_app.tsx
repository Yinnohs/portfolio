import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import { Apptheme } from '../utils'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={Apptheme}>
      <Layout router={router}>
        <Component {...pageProps} key={router?.route}></Component>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
