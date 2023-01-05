import { Box, Button, Center, Circle, Flex, Heading, HStack, Icon, IconButton, Link, Spacer, Text } from "@chakra-ui/react";
import { FaBell, FaCog, FaEnvelope, FaHome, FaMailBulk, FaPersonBooth, FaTwitter, FaUser } from 'react-icons/fa'
import NavbarLink from "../../components/navbarlink";

export default function Main({ children }) {
	return(
		<>
			{/* Navbar */}
			<Flex width="100vw" justifyContent="center">
				<NavbarLink href="#" icon={FaHome}>Home</NavbarLink>
				<NavbarLink href="#" icon={FaBell}>Notifications</NavbarLink>
				<NavbarLink href="#" icon={FaEnvelope}>Messages</NavbarLink>
				<NavbarLink href="#" icon={FaUser}>Profile</NavbarLink>
				<NavbarLink href="#" icon={FaCog}>Settings</NavbarLink>
			</Flex>
		</>
	)
}

