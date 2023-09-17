import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main'


const Website = ({Component, pageProps, router})=>{
    return(
        <ChakraProvider>
            <Layout router={router}>
                <Component {...pageProps} key={router?.route}>
                </Component>
            </Layout>
        </ChakraProvider>
    )
}

export default Website