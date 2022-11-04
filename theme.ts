import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/react'

const config: ThemeConfig = {
	useSystemColorMode: true,
}

const theme = extendTheme({
	config,
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				bg: props.colorMode === 'dark' ? 'red.900' : 'red.200'
			}
		})
	}
})

export default theme