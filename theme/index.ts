import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { linkStyles } from "./components/link";

const theme = extendTheme(globalStyles, linkStyles);

export default theme;
