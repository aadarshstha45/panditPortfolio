import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GalleryDataType } from "../../utils/dataTypes";
import { useGalleryStore } from "../../utils/store";
import { useFetchGallery } from "../../api/all-service";
import Reveal from "../../layouts/Reveal";

export default function Gallery() {
  const { data: GalleryImages, isLoading } = useFetchGallery();
  const { displayCount, incrementDisplayCount } = useGalleryStore();
  const handleExpand = () => {
    incrementDisplayCount();
  };

  return (
    <Flex flexDir={"column"} py={10}>
      <Heading textColor={"orange.300"} textAlign={"center"} mb={4}>
        Gallery
      </Heading>
      <Flex
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        px={{ base: 1, sm: 5 }}
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Reveal>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {GalleryImages?.slice(0, displayCount).map(
                  ({ id, image }: GalleryDataType) => (
                    <Reveal key={id}>
                      <Image
                        objectFit={"cover"}
                        borderRadius={10}
                        src={`http://127.0.0.1:8000/storage/${image}`}
                        alt=""
                        w={"450px"}
                        h={"350px"}
                      />
                    </Reveal>
                  )
                )}
              </SimpleGrid>
            </Reveal>

            {displayCount < GalleryImages?.length ? (
              <Box mt={5}>
                <Button colorScheme="orange" onClick={handleExpand}>
                  See More
                </Button>
              </Box>
            ) : null}
          </>
        )}
      </Flex>
    </Flex>
  );
}
