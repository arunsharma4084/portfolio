import { Header } from "@features/ui/components";
import { useTheme } from "./common/context";
import { Dashboard } from "./pages/dashboard";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

function App() {
  const { isDarkMode, theme } = useTheme();

  console.log(isDarkMode);
  return (
    <div className={isDarkMode ? `dark ${theme}` : `${theme}`}>
      <Header />
      <Dashboard />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
