import React from "react";
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  heading: string;
  description: string;
  variant?: "LEFT" | "RIGHT";
  disableImage?: boolean;
  imageUrl?: string;
  imageUrls?: string[];
};

const Event = ({
  description,
  heading,
  variant = "LEFT",
  disableImage = false,
  imageUrl,
  imageUrls = [],
}: Props) => {
  const settings = {
    dots: true,               // Show dots for navigation
    infinite: true,           // Loop through images infinitely
    speed: 500,               // Transition speed in milliseconds
    slidesToShow: 1,          // Show one slide at a time
    slidesToScroll: 1,        // Scroll one slide at a time
    autoplay: true,           // Enable automatic transitions
    autoplaySpeed: 3000,      // Time between transitions (3 seconds)
    arrows: false,            // Hide navigation arrows
  };

  return (
    <Stack
      w="full"
      fontFamily="display"
      fontSize={{ base: "4xl", lg: "5xl" }}
      lineHeight="none"
      py={{ base: "6", md: "none" }}
      align="center"
      justify={{
        base: "center",
        md: variant === "RIGHT" ? "flex-end" : "flex-start",
      }}
      spacing="6"
      direction={{
        base: "column",
        md: variant === "RIGHT" ? "row-reverse" : "row",
      }}
    >
      <VStack
        justify="center"
        alignItems={{
          base: "center",
          md: "flex-start",
        }}
        spacing="6"
        textAlign={{
          base: "center",
          md: "left",
        }}
      >
        <Text as="h3" letterSpacing="wider">
          {heading}
        </Text>
        <Text
          fontWeight="medium"
          fontFamily="body"
          color="brand.lightest"
          fontSize="md"
          lineHeight="tall"
        >
          {description}
        </Text>
      </VStack>
      {!disableImage && (
        <Box w={{ base: "full", md: "md" }} h="md" flexShrink={0}>
          {imageUrls.length > 0 ? (
            <Slider {...settings}>
              {imageUrls.map((url, index) => (
                <Box
                  key={index}
                  h="md"
                  bgImage={`url(${url})`}
                  bgSize="cover"
                  bgPos="center"
                />
              ))}
            </Slider>
          ) : (
            <Box
              h="md"
              bgImage={`url(${imageUrl})`}
              bgSize="cover"
              bgPos="center"
            />
          )}
        </Box>
      )}
    </Stack>
  );
};

export default Event;
