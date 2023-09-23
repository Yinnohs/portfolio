import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'
import { Apptheme } from '../utils'
import { FontsPlusRounded } from '../components/fonts'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={Apptheme}>
      <FontsPlusRounded />
      <Layout router={router}>
        <AnimatePresence mode={'wait'} initial={true}>
          <Component {...pageProps} key={router?.route}></Component>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
