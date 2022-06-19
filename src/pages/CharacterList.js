import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
const CharacterList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <div className=" flex flex-wrap justify-evenly">
        {data.characters.results.map((character) => (
          <Link to={`/${character.id}`} key={character.id}>
            <h2 className=" font-bold">{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
