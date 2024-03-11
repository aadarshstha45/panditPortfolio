import { Image } from "@chakra-ui/react";
import ErrorPage404 from "../assets/error404.svg";

export default function ErrorPage() {
  return <Image w={"100vw"} h={"100vh"} src={ErrorPage404} alt="Error 404" />;
}
