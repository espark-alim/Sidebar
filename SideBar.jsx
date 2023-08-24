import { Avatar, Box, Center, Flex, Heading, Text } from 'chakra-ui'
import { Divider, IconButton, SimpleGrid, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddIcon, HamburgerIcon, StarIcon } from '@chakra-ui/icons'
import NavItem from './NavItem'
import { FaHouseUser, FaRegCalendarAlt, FaUserAlt, FaProjectDiagram } from "react-icons/fa";

const SideBar = () => {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            position={'sticky'}
            // left={"5"}
            height={"95vh"}
            marginTop={"2.5vh"}
            boxShadow={"0 4px 12px rgba(0, 0, 0, 0.05)"}
            justifyContent={"space-between"}
            borderRadius={navSize == "small" ? "15px" : "30px"}
            width={navSize == "small" ? "75px" : "230px"}
            flexDirection={"column"}
            backgroundColor={''}
        >
            <Flex
                p={"5%"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                as={"nav"}
            >
                <IconButton background={"none"}
                    mt={5}
                    size={'lg'}
                    fontSize={23}
                    _hover={{ background: "none" }}
                    width={navSize == "small" && "100%"}
                    icon={<HamburgerIcon />}
                    onClick={() => {
                        if (navSize == "small") { changeNavSize("large") }
                        else { changeNavSize('small') }
                    }}
                />
                <NavItem navSize={navSize} title="Dashboard" icon={FaHouseUser} />
                <NavItem navSize={navSize} title="Celender" icon={FaRegCalendarAlt} />
                <NavItem navSize={navSize} title="Clients" icon={FaUserAlt} />
                <NavItem navSize={navSize} title="Projects" icon={FaProjectDiagram} />
                <NavItem navSize={navSize} title="Setting" icon={FaUserAlt} />
            </Flex>
            <Flex
                p={"5%"}
                flexDirection={"column"}
                width={"100%"}
                alignItems={"flex-start"}
                mb={4}
            >
                <Divider />
                <Flex mt={4} alignItems={"center"}>
                    <Flex flexDirection={'column'} ml={3} display={navSize == "small" ? "none" : "flex"} >
                        <Heading>
                            Muhammad Ali
                        </Heading>
                        <Text>
                            Admin
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SideBar
