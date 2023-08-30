import { useTheme } from "@src/common/context";
import { DarkModeToggle } from ".";
import { ReactComponent as Logo } from "../../../assets/my-logo.svg";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex h-24 w-full items-center justify-between bg-skin-accent p-4 dark:bg-skin-dark-base">
      <div className="flex items-center gap-4">
        <Logo width={80} height={80} />
        <h1 className="text-4xl font-bold text-skin-base dark:text-skin-base-dark">
          My Portfolio
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div
            className="h-6 w-6 border border-[#031d86] bg-[#6074c6]"
            onClick={() => setTheme("default")}
          ></div>
          <div
            className="h-6 w-6 border border-[#bf0012] bg-[#f96876]"
            onClick={() => setTheme("theme-red")}
          ></div>
          <div
            className="h-6 w-6 border border-[#3a9e8d] bg-[#8adcce]"
            onClick={() => setTheme("theme-green")}
          ></div>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
