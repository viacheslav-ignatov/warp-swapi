import React, { FC, useState } from "react";
import { Modal } from "../../../core-ui";
import CharacterInfo from "./CharacterInfo";
import { Character, GenderEmoji } from "../../types";
import { MALE, FEMALE, NA } from "../../constants";

const genders = {
  [MALE]: GenderEmoji.Male,
  [FEMALE]: GenderEmoji.Female,
  [NA]: GenderEmoji.NA,
};

interface CharacterListItemProps {
  character: Character;
}

const CharacterListItem: FC<CharacterListItemProps> = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li
        className="bg-yellow-200 hover:bg-yellow-300 px-3 py-1 border-t"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex justify-between items-center">
          <div className="text-xl bg-white border  rounded-full h-12 w-12 flex items-center justify-center">
            {genders[character.gender]}
          </div>
          <p className="text-lg">{character.name}</p>
        </div>
      </li>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CharacterInfo character={character} />
      </Modal>
    </>
  );
};

export default CharacterListItem;
