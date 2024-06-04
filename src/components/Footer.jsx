import React from "react";
import { Box, Flex, Text, Link, IconButton, Stack, Container } from "@chakra-ui/react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={4} mt={8}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
          <Box>
            <Text fontSize="lg" fontWeight="bold" letterSpacing="wide">
              WOLKUS
            </Text>
            <Text fontSize="sm">© {new Date().getFullYear()} VARUN PANDEY 20MIC0139</Text>
          </Box>


          <Stack direction="row" spacing={2}>
            <IconButton
              as="a"
              href="https://github.com/varunpandey2106"
              aria-label="GitHub"
              icon={<FaGithub />}
              bg="transparent"
              _hover={{ color: "gray.400" }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/varun-pandey-bb7743204/"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              bg="transparent"
              _hover={{ color: "gray.400" }}
            />


          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
