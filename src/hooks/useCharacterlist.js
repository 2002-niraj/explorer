import { useEffect, useState } from "react";
import axios from "axios";
const useCharacterList = () => {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(`https://swapi.info/api/people`);
        setCharacterList(response.data);
      } catch (err) {
        setError(err.message || "Error fetching people");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  return { characterList, loading, error };
};

export default useCharacterList;
