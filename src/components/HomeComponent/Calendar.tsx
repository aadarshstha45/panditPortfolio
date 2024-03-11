/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";

import { Box, Container, Flex, Heading } from "@chakra-ui/react";

export default function Calendar() {
  useEffect(() => {
    const loadScript = async () => {
      if (!document.getElementById("wiz1")) {
        const script = document.createElement("script");
        script.src = "https://nepalipatro.com.np/np-widgets/nepalipatro.js";
        script.async = true;
        script.id = "wiz1";

        script.onload = () => {
          // Widget script loaded, initialize the widget
          // Make sure initializeWidget is not called twice
          if ((window as any)["np_widget_wiz1"]) {
            return;
          }
        };

        const widgetDiv = document.getElementById("np_widget_wiz1")!;
        widgetDiv.setAttribute("widget", "day");
        document.body.appendChild(script);
      }
    };

    loadScript();
  }, []);

  return (
    <Container maxW="container.xl" id="calendar">
      <Flex
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        py={10}
        px={{ base: 1, md: 10, lg: 20 }}
      >
        <Heading textColor={"orange.300"} textAlign={"center"} mb={4}>
          Calendar
        </Heading>
        <Box
          paddingRight={20}
          id="np_widget_wiz1"
          width={{ base: "auto", sm: "500px", md: "700px" }}
          px={{ base: 1, sm: 10 }}
        ></Box>
      </Flex>
    </Container>
  );
}
