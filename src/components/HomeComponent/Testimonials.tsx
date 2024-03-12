import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { TestimonialDataType } from "../../utils/dataTypes";
import Blank from "../../assets/images/profile.png";
import { useFetchTestimonial } from "../../api/all-service";

import Reveal from "../../layouts/Reveal";
import { CKEditor } from "../CKEditor";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useFetchTestimonial();

  return (
    <Flex
      flexDir={"column"}
      gap={5}
      justify={"center"}
      align={"center"}
      px={{ base: 2, md: 5 }}
      py={10}
      bg={"gray.800"}
    >
      <Heading textColor={"orange.500"}>Testimonials</Heading>
      <Reveal>
        <Container maxW={"container.xl"} py={10}>
          <Flex gap={5} flexWrap={"wrap"} justify={"center"}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              <>
                {testimonials?.map(
                  ({ id, name, message, image }: TestimonialDataType) => (
                    <Card
                      key={id}
                      w={{ base: "full", sm: 300, md: 350 }}
                      bg={"gray.700"}
                    >
                      <CardHeader alignSelf={"center"}>
                        <Image
                          h={{ base: 100, md: 200 }}
                          w={{ base: 100, md: 200 }}
                          src={
                            image
                              ? `http://127.0.0.1:8000/storage/${image}`
                              : Blank
                          }
                          alt={name}
                          borderRadius={"full"}
                        />
                      </CardHeader>
                      <CardBody>
                        <Text
                          fontWeight={"bold"}
                          mt={2}
                          fontSize={{ base: "xl", md: "2xl" }}
                          textAlign={"center"}
                          textColor={"orange.500"}
                        >
                          {name}
                        </Text>
                        <Text textColor={"gray.300"}>
                          <CKEditor data={message} />
                        </Text>
                      </CardBody>
                    </Card>
                  )
                )}
              </>
            )}
          </Flex>
        </Container>
      </Reveal>
    </Flex>
  );
}
