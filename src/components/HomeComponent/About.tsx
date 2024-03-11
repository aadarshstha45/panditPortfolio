import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BG from "../../assets/images/aboutbg.jpg";

import Reveal from "../../layouts/Reveal";
import { useFetchAbout } from "../../api/all-service";
import { CKEditor } from "../CKEditor";
import { AboutDataType } from "../../utils/dataTypes";
export default function About() {
  const { data: AboutData, isLoading } = useFetchAbout();
  console.log(AboutData);
  return (
    <Flex
      id="about"
      flexDir={"column"}
      my={10}
      justify={"center"}
      align={"center"}
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${BG}),`}
      py={10}
      bgPos={"cover"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      maxW={"100%"}
      objectFit={"cover"}
    >
      <Heading
        textColor={"orange.500"}
        lineHeight={8}
        textAlign={"center"}
        mb={4}
      >
        About Us
      </Heading>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {AboutData?.map(({ id, description, image }: AboutDataType) => (
            <Reveal>
              <Flex
                flexWrap={{ base: "wrap", md: "nowrap" }}
                justify={"center"}
                align={"center"}
                px={5}
                gap={5}
                key={id}
              >
                <Box w={{ md: 700 }}>
                  <CKEditor data={description} />
                </Box>
                <Box>
                  <Image
                    objectFit={"cover"}
                    w={400}
                    h={600}
                    src={`http://127.0.0.1:8000/storage/${image}`}
                    borderRadius={10}
                  />
                </Box>
              </Flex>
            </Reveal>
          ))}
        </>
      )}
    </Flex>
  );
}
