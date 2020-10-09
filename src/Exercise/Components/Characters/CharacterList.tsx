import React, { FC } from "react";
import CharacterListItem from "./CharacterListItem";
import { Character } from "../../types";

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => (
        <CharacterListItem key={character.name} character={character} />
      ))}
    </ul>
  );
};

export default CharacterList;
