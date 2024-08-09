import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Event from "./Event";
import ProjectSlider from "./ProjectSlider";

const Main = () => {
  return (
    <Box as="main" w="full" mt="10">
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="left"
        alignItems="center"
        flexDir="column"
        color="brand.lightest"
        userSelect="none"
      >
        <Event
          heading="Technofania"
          description="Technofania, the perfect fusion of masterminds, proves its excellence every year with innovation and proactive topping to fresh young minds. This event took its birth in 2017. It is an inter-departmental Technical symposium organized by TEAM OSOC every year. It is a two-day extravaganza event in which many technical and non-technical events are organized for participants."
          imageUrls={[
            "/events/closing.jpg",
            "/events/agamya.jpg",
            "/events/team.jpg",
            "/events/groupphoto.jpg",
          ]}
        />
        <Event
          variant="RIGHT"
          heading="Workshops"
          description="This event possesses a workshop on Web Extensions which will: Let you gain the knowledge of development of add-ons. Creates a new dimension of work for all. Provides you with knowledge of how web extensions work. About Open Source. How to work on Linux (Ubuntu, Mint, Kali). Basic knowledge of Linux. Basic commands used in Linux. How Linux is better than Windows."
          imageUrls={[
            "/events/w1.jpg",
            "/events/w2.jpg",
            "/events/w3.jpg",
            "/events/w4.jpeg",
          ]}
        />
        <Event
          disableImage={true}
          heading="Projects In PRAGYAN"
          description="Nowadays, innovative and impactful projects are an essential requirement for every student, so if anyone wants to work on real-time projects, we are here for you all. Yes, OSOC gives you all a platform where you can build a project in any domain you want. Every year, 4-6 projects are made and selected for SANGAM, PRAGYAN HARDWARE HACKATHON to present them in exhibition. In 2019, we worked on 4 projects and 2 of them, MEDICAL ATM and RECALL THE FORGOTTEN SYSTEM, were selected for the final round."
        />
        <Box w="full">
          <ProjectSlider
            slides={[
              {
                id: "1",
                title: "Medical ATM",
                description:
                  "Medical ATM is a machine which provides medicine service to customers 24/7. This project work includes a mechanism that works with the help of Arduino to provide the medicines to the customers. It also includes an Android application through which users can use the facilities of Medical ATM. It was live-demonstrated in SANGAM'19, PRAGYAN HARDWARE HACKATHON",
                imageUrl: "/medicalatm.jpeg",
              },
              {
                id: "2",
                title: "Smart Helmet",
                description:
                  "Smart Helmet is a smart device which will be used to send SOS messages in case of bike accidents. It will take readings of the impact on the helmet at the time of the accident. Will trigger an SMS to emergency contacts and nearby hospitals.",
                imageUrl: "/smarthelmet.jpeg",
              },
              {
                id: "3",
                title: "RECALL THE FORGOTTEN",
                description:
                  "It is a system which provides us with a way to look for the items that we forget in day-to-day use. For example, Wallet, keys, etc.",
                imageUrl: "/recall.jpeg",
              },
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
