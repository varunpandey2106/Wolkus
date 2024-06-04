

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   Avatar,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   IconButton,
//   useColorMode,
//   useColorModeValue
// } from "@chakra-ui/react";
// import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
// import { useAuth } from "../context/useAuth";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const { toggleColorMode } = useColorMode();
//   const colorMode = useColorModeValue("light", "dark");
//   const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

//   return (
//     <Box py="4" mb="2" px={8}>
//       <Flex justifyContent={"space-between"} alignItems="center">
//         <Link to="/">
//           <Box
//             fontSize={"2xl"}
//             fontWeight={"bold"}
//             color={"red"}
//             letterSpacing={"widest"}
//             fontFamily={"mono"}
//           >
//             WOLKUS
//           </Box>
//         </Link>

//         {/* DESKTOP */}
//         {user && (
//           <Flex gap="4" alignItems={"center"}>
//             <Link to="/">Home</Link>
//             <Link to="/search">
//               <SearchIcon fontSize={"xl"} />
//             </Link>
//             <IconButton
//               aria-label="Toggle dark mode"
//               icon={icon}
//               onClick={toggleColorMode}
//               bg="transparent"
//             />
//             <Menu>
//               <MenuButton>
//                 <Avatar
//                   bg={"red.500"}
//                   color={"white"}
//                   size={"sm"}
//                   name={user?.email}
//                 />
//               </MenuButton>
//               <MenuList>
//                 <Link to="/watchlist">
//                   <MenuItem>Watchlist</MenuItem>
//                 </Link>
//                 <MenuItem onClick={logout}>Logout</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         )}
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Box py="4" mb="2" px={8} boxShadow="sm" bg={useColorModeValue("white", "gray.800")}>
      <Flex justifyContent={"space-between"} alignItems="center">
        <Link to="/">
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"red.500"}
            letterSpacing={"widest"}
            fontFamily={"mono"}
          >
            WOLKUS
          </Text>
        </Link>

        {/* DESKTOP */}
        {user && (
          <Flex gap="4" alignItems={"center"}>
            <Link to="/">
              <Button variant="ghost" _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}>
                Home
              </Button>
            </Link>
            <Link to="/search">
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="ghost"
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
              />
            </Link>
            <IconButton
              aria-label="Toggle dark mode"
              icon={icon}
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            />
            <Menu>
              <MenuButton>
                <Avatar
                  bg={"red.500"}
                  color={"white"}
                  size={"sm"}
                  name={user?.email}
                />
              </MenuButton>
              <MenuList>
                <Link to="/watchlist">
                  <MenuItem>Watchlist</MenuItem>
                </Link>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
