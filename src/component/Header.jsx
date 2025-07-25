
import Searchinput from "./Searchinput";
import star_black from "../assets/star_black.jpg";
import star_white from "../assets/star_white.jpg";
import  useTheme  from "../context/useTheme.js";

const Header = ({ onSearchFunc, setCurrentPage }) => {

 const { darkMode, toggleTheme } = useTheme();

  const handleClick = () => {
    setCurrentPage(1);
  };

  return (
    <header className="flex justify-between items-center px-10 py-4 fixed top-0 right-0 left-0 bg-white dark:bg-gray-900 text-black dark:text-white shadow">
      <div className="flex gap-[8px] items-center ">
        <img
          src={darkMode? star_white :star_black}
          onClick={handleClick}
          alt="star_logo"
          className="w-24 h-9 cursor-pointer"
        />
      </div>

      <div className="flex gap-10 justify-between items-center">
        <Searchinput onSearchFunc={onSearchFunc} />
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox"  checked={darkMode} onChange={toggleTheme} class="sr-only peer" />
          <div class="relative w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <strong className="text-md">{darkMode ? "Dark Mode" : "Light Mode"}</strong>
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
