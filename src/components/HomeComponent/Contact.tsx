/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ContactDataType } from "../../utils/dataTypes";
import TextInput from "../FormComponent/TextInput";

import { contactSchema } from "../../utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSaveQuestion } from "../../api/all-service";

import Reveal from "../../layouts/Reveal";

export default function Contact() {
  const { mutateAsync, isLoading } = useSaveQuestion();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDataType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "" as never,
      message: "",
    },
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactDataType) => {
    if (data.name && data.email && data.phone && data.message) {
      mutateAsync({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
    }
    reset();
  };

  return (
    <Box id="contact" py={5}>
      <Heading textColor={"orange.300"} textAlign={"center"}>
        Contact Us
      </Heading>
      <Reveal>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          justify={"center"}
          py={10}
          px={{ base: 1, lg: 5 }}
          gap={5}
        >
          <Box w={{ base: "100%", lg: "70%" }} h={"600px"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13259.592461878841!2d150.99843302309486!3d-33.814942243998395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a318e167af4f%3A0x5017d681632c600!2sParramatta%20NSW%202150%2C%20Australia!5e0!3m2!1sen!2snp!4v1708954957775!5m2!1sen!2snp"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "10px" }}
              loading="lazy"
            ></iframe>
          </Box>
          <Box
            alignSelf={{ base: "center", lg: "start" }}
            w={{ base: "100%", lg: "30%" }}
            bg={"gray.50"}
            p={{ base: 6, lg: 12 }}
            borderRadius={8}
          >
            <Heading textAlign={"center"} textColor={"orange.500"} mb={4}>
              Got questions?
            </Heading>
            <Text
              fontSize={"lg"}
              fontWeight={"normal"}
              textColor={"black"}
              mb={4}
            >
              We've got answers! Shoot us a message and let's get the
              conversation started!
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                type="text"
                placeholder="Name"
                name="name"
                control={control}
                errors={errors}
              />
              <TextInput
                type="text"
                placeholder="Email"
                name="email"
                control={control}
                errors={errors}
              />
              <TextInput
                type="number"
                placeholder="Phone"
                name="phone"
                control={control}
                errors={errors}
              />
              <TextInput
                type="textarea"
                placeholder="Message"
                name="message"
                control={control}
                errors={errors}
              />

              <Button isLoading={isLoading} colorScheme="teal" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Flex>
      </Reveal>
    </Box>
  );
}
