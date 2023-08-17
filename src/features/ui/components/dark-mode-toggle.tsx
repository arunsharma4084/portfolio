import { MdSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";

interface darkModeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

const DarkModeToggle = ({ isDarkMode, toggle }: darkModeToggleProps) => {
  return (
    <div
      className="relative m-6 box-border h-7 w-[54px] rounded-[14px] border-2 border-slate-900 px-1 dark:border-white"
      onClick={toggle}
    >
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <div
          className={`absolute h-[25px] w-[26px] rounded-full border border-white bg-indigo-900 dark:bg-white ${
            isDarkMode ? "hidden" : ""
          }`}
        ></div>
        <MdSunny size={"24px"} style={{ color: "yellow", padding: "1px" }} />
      </div>

      <div className="absolute right-0 top-0 flex items-center justify-center">
        <div
          className={`absolute h-[25px] w-[26px] rounded-full border border-black bg-indigo-900 dark:bg-white ${
            isDarkMode ? "" : "hidden"
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
