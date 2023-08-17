import { useDarkMode } from "usehooks-ts";
import { DarkModeToggle, Header } from "./features/ui/components";

function App() {
  const { isDarkMode, toggle } = useDarkMode(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header isDarkMode={isDarkMode} toggle={toggle} />
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-sky-100 p-8 dark:bg-slate-900 dark:text-white">
        <div className="bg-skin-fill text-skin-base flex flex-col rounded-xl border-2 border-gray-600 p-8">
          <h1 className="font-medium">My Portfolio</h1>
          <p>Dark Mode : </p>
          <p>{isDarkMode ? "True" : "False"}</p>
          <button onClick={toggle}>Toggle Dark Mode</button>
          <DarkModeToggle isDarkMode={isDarkMode} toggle={toggle} />
        </div>

        <div className="bg-skin-fill text-skin-base theme-red flex flex-col rounded-xl border-2 border-gray-600 p-8">
          <h1 className="font-medium">My Portfolio</h1>
          <p>Dark Mode : </p>
          <p>{isDarkMode ? "True" : "False"}</p>
          <button onClick={toggle}>Toggle Dark Mode</button>
          <DarkModeToggle isDarkMode={isDarkMode} toggle={toggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
