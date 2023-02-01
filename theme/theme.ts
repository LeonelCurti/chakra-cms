import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";

const theme = extendTheme(
  globalStyles,  
);

export default theme;
