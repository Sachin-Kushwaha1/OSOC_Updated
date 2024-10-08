import { Box, Container, Text, VStack } from "@chakra-ui/layout";
import { Button, Link, Stack } from "@chakra-ui/react";
import React from "react";

const Main = () => {
  return (
    <Box as="main" w="full" mt={{ base: "-40", md: "-20" }}>
      <Container
        minH="2xl"
        h="100vh"
        maxW="container.xl"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        color="brand.lightest"
      >
        <Stack w="full" align="center" justify="center" flexGrow={1}>
          <VStack spacing="8" align={{ base: "center", md: "flex-start" }}>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text
                as="h1"
                fontSize={{ base: "3xl", sm: "5xl", md: "6xl", lg: "72px" }}
                fontFamily="display"
                lineHeight="none"
                letterSpacing="widest"
              >
                Let's Connect
              </Text>
              <Text
                as="h3"
                fontSize={{ base: "3xl", sm: "5xl", md: "6xl", lg: "72px" }}
                fontFamily="display"
                lineHeight="none"
                letterSpacing="widest"
                color="brand.lightest"
                bg="brand.lightest"
                bgImage="/water-art.jpg"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPos="left"
                // bgGradient="linear(to-l, #e3a7f9, #fbec8f)"
                bgClip="text"
              >
                osocnitt@gmail.com
              </Text>
            </Box>
            <Text
              fontSize="lg"
              fontFamily="body"
              fontWeight="thin"
              color="brand.gray"
              textAlign={{ base: "center", md: "left" }}
            >
              To contact us kindly use the following contact details.<br /><br />
              Phone Number: +91 7840883262 (Sachin Kumar)<br />
              Facebook Page: <a href="http://facebook.com/osocnitt" target="_blank" rel="noopener noreferrer">http://facebook.com/osocnitt</a><br />
              Instagram Page: <a href="https://www.instagram.com/osoc_nitt/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/osoc_nitt</a><br />
              Github Page: <a href="https://github.com/osocnitt-dev/" target="_blank" rel="noopener noreferrer">https://github.com/osocnitt-dev</a><br />
            </Text>
            <Button
              as={Link}
              color="brand.lightest"
              _hover={{ color: "brand.400", bg: "brand.lightest" }}
              size="md"
              variant="outline"
              href="mailto:osocnitt@gmail.com?subject=Saying Hi!"
            >
              Connect
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Main;
