import { MdSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";

interface darkModeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

const DarkModeToggle = ({ isDarkMode, toggle }: darkModeToggleProps) => {
  return (
    <div
      className="dark:border-skin-fill border-skin-fill-inverted relative h-7 w-[54px] rounded-[14px] border-2 px-1"
      onClick={toggle}
    >
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <div
          className={`bg-skin-complement border-skin-fill-inverted absolute h-[25px] w-[26px] rounded-full border-2 transition-opacity ${
            isDarkMode ? "opacity-0" : ""
          }`}
        ></div>
        <MdSunny size={"24px"} style={{ color: "yellow", padding: "1px" }} />
      </div>

      <div className="absolute right-0 top-0 flex items-center justify-center">
        <div
          className={`dark:bg-skin-fill-inverted border-skin-fill absolute h-[25px] w-[26px] rounded-full border-2 transition-opacity ${
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
