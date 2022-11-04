import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Main from './templates/main'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
	return(
		<ChakraProvider theme={theme}>
			<Main>
				<Component {...pageProps} />
			</Main>
		</ChakraProvider>
	)
}

export default MyApp
