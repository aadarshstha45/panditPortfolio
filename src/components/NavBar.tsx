import { Flex, HStack, Text } from "@chakra-ui/react";
import { navLinks } from "../utils/navLinks";
import { Link } from "react-scroll";
import Reveal from "../layouts/Reveal";

export default function NavBar() {
  return (
    <Reveal>
      <Flex
        px={{ base: 4, sm: 8, md: 16, lg: 32 }}
        w={"100%"}
        justify={"end"}
        py={6}
        flexWrap={"wrap"}
      >
        <HStack gap={8} flexWrap={"wrap"}>
          {navLinks.map(({ to, label }, index) => (
            <Link
              key={index}
              to={to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <Text
                textColor={"orange.500"}
                cursor={"pointer"}
                _hover={{ textColor: "orange.300" }}
                fontSize={{ base: "xl", md: "2xl" }}
              >
                {label}
              </Text>
            </Link>
          ))}
        </HStack>
      </Flex>
    </Reveal>
  );
}
