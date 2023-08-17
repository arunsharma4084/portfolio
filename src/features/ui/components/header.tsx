import { DarkModeToggle } from ".";

interface darkModeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

const Header = ({ isDarkMode, toggle }: darkModeToggleProps) => {
  return (
    <div className="flex h-24 w-full items-center justify-between bg-gray-200 dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        My Portfolio
      </h1>
      <DarkModeToggle isDarkMode={isDarkMode} toggle={toggle} />
    </div>
  );
};

export default Header;
