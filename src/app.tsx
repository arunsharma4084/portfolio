import { useDarkMode } from "usehooks-ts";
import { Header } from "@features/ui/components";

function App() {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header isDarkMode={isDarkMode} toggle={toggle} />
      <div className="dark:bg-skin-fill-dark flex h-screen w-full flex-col items-center justify-center gap-4 bg-skin-fill p-8 dark:text-white">
        My Portfolio
      </div>
    </div>
  );
}

export default App;
