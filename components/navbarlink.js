import { Button, Icon, Link, Text, HStack } from "@chakra-ui/react";
import styles from '../styles/navbar.module.css'


export default function NavbarLink({ href, icon, children }) {
	return(
		<Link href={href} role="group">
			<Button
			p="12px"
			justifyContent="left"
			overflow="hidden"
			flex="0%"
			width="32px"
			transition="all 0.25s"
			_groupHover={{flex: '100%', width: '200px'}} >
				<Icon
				as={icon} />
				<Text pl={4}>
					{children}
				</Text>
			</Button>
		</Link>
	)
}