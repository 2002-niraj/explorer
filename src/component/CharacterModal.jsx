import Loader from "./Loader";
import useCharacterdetails from "../hooks/useCharacterdetails";
import { ImCross } from "react-icons/im";
import { formateString } from "../utils/stringUtils.js";
import {formatBirthYear} from "../utils/formatYear.js"

const CharacterModal = ({ character, onClose }) => {
  const { details, loading } = useCharacterdetails(character);

  const {
    name,
    birth_year,
    gender,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
  } = character;

  const { homeworld, films, vehicles, starships, imageUrl } = details;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm p-4 border  dark:bg-black/20">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-white dark:text-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500 text-xl dark:text-gray-300 dark:hover:text-red-400"
          >
            <ImCross />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">
            {name}'s Details
          </h2>

          <div className="flex items-center gap-4">
         
            <div className="w-1/2">
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Birth Year:</strong> {formatBirthYear(birth_year)}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Gender:</strong> {formateString(gender)}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Height:</strong>{" "}
                {height === "unknown" ? "unknown" : `${height} cm`}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Mass:</strong>{" "}
                {mass === "unknown" ? "unknown" : `${mass} kg`}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Hair Color:</strong> {formateString(hair_color, "None")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Skin Color:</strong> {formateString(skin_color, "None")}
              </p>
              <p className="text-gray-600  dark:text-gray-300 mb-[3px]">
                <strong>Eye Color:</strong> {formateString(eye_color, "None")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Homeworld:</strong>{" "}
                {formateString(homeworld, "unknown")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Films:</strong> {films?.join(", ") || "None"}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Vehicles:</strong> {vehicles?.join(", ") || "None"}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
                <strong>Starships:</strong> {starships?.join(", ") || "None"}
              </p>
            </div>

      
            <div className="w-[300px]  h-[330px] flex-shrink-0 rounded overflow-hidden">
              <img
                src={imageUrl}
                alt={`${name}`}
                className="w-full h-full object-contain object-top"
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterModal;
