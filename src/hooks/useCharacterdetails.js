import { useState, useEffect } from "react";
import axios from "axios";

const useCharacterDetails = (character) => {
  const [details, setDetails] = useState({
    homeworld: "",
    imageUrl:"",
    films: [],
    vehicles: [],
    starships: [],
  });
  const [loading,setLoading] = useState(false);
  const {name} = character

  useEffect(() => {
    const fetchDetails = async () => {
      try {
       setLoading(true);
        const [homeworldRes, allCharactersRes, filmsRes, vehiclesRes, starshipsRes] =
          await Promise.all([
            axios.get(character.homeworld).then((res) => res.data),
            axios.get(`https://akabab.github.io/starwars-api/api/all.json`).then((res)=>res.data),
            Promise.all(
              character.films.map((url) =>
                axios
                  .get(url)
                  .then((res) => res.data)
                  .catch(() => null)
              )
            ),
            Promise.all(
              character.vehicles.map((url) =>
                axios
                  .get(url)
                  .then((res) => res.data)
                  .catch(() => null)
              )
            ),
            Promise.all(
              character.starships.map((url) =>
                axios
                  .get(url)
                  .then((res) => res.data)
                  .catch(() => null)
              )
            ),
          ]);

           const imageMatch = allCharactersRes.find(
          (ch) => ch.name.toLowerCase() === name.toLowerCase()
        );
          

        setDetails({
          homeworld: homeworldRes?.name || "Unknown",
          imageUrl: imageMatch?.image || "",
          films: filmsRes.filter(Boolean).map((f) => f.title),
          vehicles: vehiclesRes.filter(Boolean).map((v) => v.name),
          starships: starshipsRes.filter(Boolean).map((s) => s.name),
        });
      } catch (error) {
        console.error("Failed to fetch character details", error);
      }
      finally{
         setLoading(false)
         
      }
    };

    fetchDetails();
  }, [character,name]);

  return {details,loading};
};

export default useCharacterDetails;
