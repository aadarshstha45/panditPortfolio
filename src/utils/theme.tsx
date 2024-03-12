import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body": {
        color: "white",
        lineHeight: "tall",
        bgGradient: "linear(to bottom right, #D2691E, #A52A2A, #8B4513)",
        fontSize: "lg",
        fontFamily: "Inter-Variable",
      },
    },
  },
});
