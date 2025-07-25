import { useState, useMemo, useEffect } from "react";
import Charactercard from "../../src/component/Charactercard";
import Paginationcontrols from "./Paginationcontrol";
import Shimmer from "./Shimmer";
import Header from "./Header";
import CharacterModal from "./CharacterModal";
import useCharacterList from "../hooks/useCharacterlist";


const Characterlist = () => {
  const { characterList, loading } = useCharacterList();


  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const filteredCharacters = useMemo(() => {
    return characterList.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [characterList, searchQuery]);

   const handleViewDetails = (character) => {
    setSelectedCharacter(character);
  };

   const handleCloseModal = () => {
    setSelectedCharacter(null);
  };


  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination logic
  const peoplesPerPage = 8;
  const totalPages = Math.ceil(filteredCharacters.length / peoplesPerPage);

  const startIndex = (currentPage - 1) * peoplesPerPage;
  const endIndex = startIndex + peoplesPerPage;
  const currentPeoples = filteredCharacters.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  if (loading) return <Shimmer />;

  return (
    <>
     
     <div  >
       <Header onSearchFunc={setSearchQuery} setCurrentPage={setCurrentPage} />
       
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="p-2 mt-19 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Star Wars Characters</h1>

        {filteredCharacters.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No characters found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 -mx-2  md:py-2">
            {currentPeoples.map((character) => (
              <Charactercard
                key={character.id}
                character={character}
                onViewDetails={() => handleViewDetails(character)}
              />
            ))}
          </div>
        )}

        {filteredCharacters.length > peoplesPerPage && (
          <div className="mt-10">
            <Paginationcontrols
              currentPage={currentPage}
              totalPages={totalPages}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </div>
        )}

        {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={handleCloseModal} />
      )}

      </div>
    </div>

     </div>
    </>
  );
};

export default Characterlist;
