import * as React from "react";
import { useLocalStorage, useDarkMode } from "usehooks-ts";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextType>(null!);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode, toggle } = useDarkMode(false);
  const toggleDarkMode = () => toggle();

  const [theme, setTheme] = useLocalStorage<string>("theme", "default");

  const value = { isDarkMode, toggleDarkMode, theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
