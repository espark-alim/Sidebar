import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Icon,
} from '@chakra-ui/react'
import { Flex, Link, Text } from 'chakra-ui'

const NavItem = ({ title, icon, navSize }) => {
    return (
        navSize &&
        <Flex
            mt={30}
            flexDirection={"column"}
            width={"100%"}
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu>
                <Link
                    backgroundColor={"#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecoration: "none", backgroundColor: "#82AAAD" }}
                    width={navSize == "large" && "100%"}
                    _active={{ backgroundColor: "#82AAAD" }}
                >
                    <MenuButton alignItems={'center'} display={'flex'}>
                        <Flex alignItems={"center"}>
                            {icon && <Icon
                                as={icon}
                                fontSize={'xl'}
                            />}
                            <Text mx={2}
                                pl={2}
                                display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

export default NavItem
