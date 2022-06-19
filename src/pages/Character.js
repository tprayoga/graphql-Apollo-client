import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <div>
        <img src={data.character.image} alt="" />
        <h1>{data.character.name}</h1>
        <h1>{data.character.gender}</h1>
        <div>
          {data.character.episode.map((episode) => (
            <div>
              <h1>
                {episode.name}- <b>{episode.episode}</b>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
