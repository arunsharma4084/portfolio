import { DarkModeToggle } from ".";
// import { ReactComponent as Logo } from "../../../assets/mylogo.svg";

interface darkModeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

const Header = ({ isDarkMode, toggle }: darkModeToggleProps) => {
  return (
    <div className="bg-skin-accent dark:bg-skin-dark-base flex h-24 w-full items-center justify-between p-4">
      {/* <Logo /> */}
      <h1 className="dark:text-skin-base-dark text-2xl font-bold text-skin-base">
        My Portfolio
      </h1>
      <DarkModeToggle isDarkMode={isDarkMode} toggle={toggle} />
    </div>
  );
};

export default Header;
