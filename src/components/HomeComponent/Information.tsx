import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { InfoDataType, SocialDataType } from "../../utils/dataTypes";
import Phone from "../../assets/icons/mobile.png";
import Map from "../../assets/icons/map.png";
import Email from "../../assets/icons/mail.png";
import Clock from "../../assets/icons/clock.png";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from "../../assets/icons/SocialIcon";
import { useFetchContact, useFetchSocial } from "../../api/all-service";

import Reveal from "../../layouts/Reveal";

export default function Information() {
  const { data: ContactInfo, isLoading } = useFetchContact();
  const { data: SocialInfo, isLoading: loading } = useFetchSocial();
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      p={{ base: 5, sm: 10 }}
      justify={{ base: "start", md: "center", lg: "space-between" }}
      align={{ base: "start", md: "center" }}
      gap={10}
      bg={"gray.700"}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Reveal>
          <Flex
            w={{ base: "auto", sm: "100%" }}
            flexWrap={"wrap"}
            flexDir={{ base: "column", md: "row" }}
            gap={5}
            overflow={"hidden"}
          >
            {ContactInfo?.map(({ title, slug, body }: InfoDataType) => (
              <Link
                key={slug}
                to={
                  slug === "phone"
                    ? `tel:${title}`
                    : slug === "mail"
                    ? `mailto:${body}`
                    : ""
                }
              >
                <Flex
                  flexDir={{ base: "column", sm: "row" }}
                  key={slug}
                  justify={{ base: "start", lg: "center" }}
                  gap={5}
                  align={{ base: "start", md: "center" }}
                >
                  {slug === "phone" && <Image src={Phone} w={10} />}
                  {slug === "mail" && <Image src={Email} w={10} />}
                  {slug === "address" && <Image src={Map} w={10} />}
                  {slug === "time" && <Image src={Clock} w={10} />}

                  <Flex flexDir={"column"} gap={1}>
                    <Heading
                      textOverflow={"ellipsis"}
                      fontSize={{ base: "base", lg: "md" }}
                      textColor={"orange.200"}
                    >
                      {title}
                    </Heading>
                    <Text
                      textOverflow={"clip"}
                      fontSize={{ base: "sm", lg: "md" }}
                    >
                      {body}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Reveal>
      )}
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Reveal>
          <Flex overflow={"hidden"} flexWrap={"wrap"} gap={2}>
            {SocialInfo?.map(({ id, link, slug }: SocialDataType) => (
              <Link key={id} to={link} target="_blank">
                {slug === "facebook" && <FacebookIcon />}
                {slug === "instagram" && <InstagramIcon />}
                {slug === "twitter" && <TwitterIcon />}
                {slug === "linkedin" && <LinkedInIcon />}
              </Link>
            ))}
          </Flex>
        </Reveal>
      )}
    </Flex>
  );
}
