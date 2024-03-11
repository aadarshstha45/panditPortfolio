import { Box, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import banner from "../assets/images/aboutbg.jpg";
import Testimonials from "../components/HomeComponent/Testimonials";
import About from "../components/HomeComponent/About";
import Contact from "../components/HomeComponent/Contact";
import Gallery from "../components/HomeComponent/Gallery";
import Services from "../components/HomeComponent/Services";
import Information from "../components/HomeComponent/Information";
import { motion } from "framer-motion";
import Calendar from "../components/HomeComponent/Calendar";
import HomeContents from "../components/HomeComponent/HomeContents";

export default function Home() {
  return (
    <Box overflow={"hidden"}>
      <Box
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${banner})`}
        height={{ base: "650px", md: "800px" }}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <NavBar />

        <Text
          as={motion.div}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: 1,
            y: 50,
            transition: { duration: 1 },
          }}
          textAlign={"left"}
          textColor={"white"}
          fontSize={{ base: "3xl", md: "5xl" }}
          p={{ base: 5, md: 20 }}
          w={{ base: 200, sm: 400, md: 600 }}
        >
          We Are Here To Perform All Rituals For You
        </Text>
      </Box>
      <HomeContents />
      <Calendar />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Information />
    </Box>
  );
}
