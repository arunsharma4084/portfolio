import * as React from "react";
import { ThemeContext } from "./theme-context";

export default function useTheme() {
  return React.useContext(ThemeContext);
}
