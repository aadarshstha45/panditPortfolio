import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useServiceStore } from "../../utils/store";
import { ServiceDataType } from "../../utils/dataTypes";
import No from "../../assets/images/no-pictures.png";
import { useFetchServices } from "../../api/all-service";
import Reveal from "../../layouts/Reveal";
import { CKEditor } from "../CKEditor";

export default function Services() {
  const { displayCount, incrementDisplayCount } = useServiceStore();
  const { data: services, isLoading } = useFetchServices();

  const handleExpand = () => {
    incrementDisplayCount();
  };

  return (
    <Container id="services" maxW={"container.2xl"}>
      <Flex
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        py={10}
        px={{ base: 1, md: 10, lg: 20 }}
      >
        <Heading textColor={"orange.300"} textAlign={"center"} mb={4}>
          Our Services
        </Heading>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Reveal>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={10}
                py={10}
              >
                {services
                  ?.slice(0, displayCount)
                  .map(({ id, title, image, description }: ServiceDataType) => (
                    <Reveal key={id}>
                      <Card h={"100%"} borderRadius={10} overflow={"hidden"}>
                        <Image
                          src={
                            image
                              ? `http://127.0.0.1:8000/storage/${image}`
                              : No
                          }
                          objectFit={image ? "cover" : "contain"}
                          h={"350px"}
                          flexShrink={0}
                        />

                        <CardBody lineHeight={8}>
                          <Heading
                            textColor={"orange.500"}
                            fontSize={"2xl"}
                            mb={2}
                          >
                            {title}
                          </Heading>

                          <CKEditor data={description} />
                        </CardBody>
                      </Card>
                    </Reveal>
                  ))}
              </SimpleGrid>
            </Reveal>

            {displayCount < services?.length ? (
              <Box justifyItems={"center"} justifyContent={"center"} mt={5}>
                <Button colorScheme="orange" onClick={handleExpand}>
                  See More
                </Button>
              </Box>
            ) : null}
          </>
        )}
      </Flex>
    </Container>
  );
}
