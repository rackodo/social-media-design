import { Box, Button, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { FaTwitter } from 'react-icons/fa'

export default function Main({ children }) {
	return(
		<Flex
		w='100vw'
		minH='100vh'
		justifyContent='center' >
			<Box
			p={4}
			borderRight="1px solid" >
				<Link
				as={IconButton}
				icon={<FaTwitter/>}
				href="https://google.com"
				borderRadius="100%"
				size="1.25em" />
			</Box>
			<Box
			w='500px'
			borderRight="1px solid" >
				<Heading
				as="h1"
				borderBottom="1px solid"
				p={4} >
					Home
				</Heading>
			</Box>
		</Flex>
	)
}