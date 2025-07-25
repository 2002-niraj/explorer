import { formateString } from "../utils/stringUtils.js";
const CharacterCard = ({
  character,
  onViewDetails,
}) => {
   
  const {name,  birth_year,gender, height, mass} = character
  return (
    <div className="max-w-[280px] w-full mx-auto bg-white dark:bg-gray-800 border border-gray-200  dark:border-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-4 space-y-2 ">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white text-left">{name}</h2>

        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-[2px]">
            <strong>Birth Year</strong>: {birth_year}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
            <strong>Gender</strong>:{formateString(gender)}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
            <strong>Height</strong>: {height === "unknown" ? "unknown" : `${height} kg`}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-[3px]">
            <strong>Mass</strong>: {mass === "unknown" ? "unknown" : `${mass} kg`}
          </p>
        </div>

        <button
          onClick={onViewDetails}
          className="mt-2 bg-transparent cursor-pointer hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 dark:border-green-400 hover:border-transparent rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
