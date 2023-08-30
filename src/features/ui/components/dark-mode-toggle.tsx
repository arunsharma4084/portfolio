import { useTheme } from "@src/common/context";
import { MdSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className="relative h-7 w-[54px] rounded-[14px] border-2 border-skin-fill-inverted px-1 dark:border-skin-fill"
      onClick={toggleDarkMode}
    >
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <div
          className={`absolute h-[25px] w-[25px] rounded-full border-2 border-skin-fill-inverted bg-skin-complement transition-opacity ${
            isDarkMode ? "opacity-0" : ""
          }`}
        ></div>
        <MdSunny size={"24px"} style={{ color: "yellow", padding: "1px" }} />
      </div>

      <div className="absolute right-0 top-0 flex items-center justify-center">
        <div
          className={`absolute h-[25px] w-[25px] rounded-full border-2 border-skin-fill transition-opacity dark:bg-skin-fill-inverted ${
            isDarkMode ? "" : "opacity-0"
          }`}
        ></div>
        <PiMoonStarsFill
          size={"24px"}
          style={{ color: "black", padding: "1px" }}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
