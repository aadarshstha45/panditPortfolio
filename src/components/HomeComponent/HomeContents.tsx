import Hindu from "../../assets/images/hindu.png";
import { useFetchHome } from "../../api/all-service";
import { Card, CardFooter, Flex, Image, Text } from "@chakra-ui/react";
import { HomeDataType } from "../../utils/dataTypes";
import { motion } from "framer-motion";

export default function HomeContents() {
  const { data: HomeData, isLoading } = useFetchHome();
  return (
    <Flex flexWrap={"wrap"} gap={10} justify={"center"} px={2}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {HomeData?.map(({ slug, heading, image }: HomeDataType) => (
            <Card
              key={slug}
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 0 },
                visible: {
                  opacity: 1,
                  y: -75,
                  transition: { duration: 1 },
                },
              }}
              initial="hidden"
              animate="visible"
              w={{ base: 300, sm: 400 }}
              borderRadius={10}
              overflow={"hidden"}
            >
              <Image
                w={{ base: 300, sm: 400 }}
                h={400}
                src={image ? `http://127.0.0.1:8000/storage/${image}` : Hindu}
                objectFit={"cover"}
              />

              <CardFooter
                textColor={"white"}
                fontSize={{ base: "base", md: "xl" }}
                justify={"center"}
                bgColor={"orange.500"}
              >
                {heading}
              </CardFooter>
            </Card>
          ))}
        </>
      )}
    </Flex>
  );
}
