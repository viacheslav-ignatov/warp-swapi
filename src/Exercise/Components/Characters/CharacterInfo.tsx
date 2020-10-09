import React, { FC } from "react";
import { CharacterInfoRowBox, CharacterInfoRow } from "./CharacterInfoRow";
import { Character } from "../../types";

interface CharacterInfoProps {
  character: Character;
}

const CharacterInfo: FC<CharacterInfoProps> = ({
  character: {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  },
}) => (
  <>
    <h1 className="text-center font-bold text-xl mb-4">{name}</h1>
    <div className="flex divide-x">
      <CharacterInfoRowBox>
        <CharacterInfoRow icon="📝‍" label="Name">
          {name}
        </CharacterInfoRow>
        <CharacterInfoRow icon="⬆️‍" label="Height">
          {height}
        </CharacterInfoRow>
        <CharacterInfoRow icon="💪🏾‍" label="Mass">
          {mass}
        </CharacterInfoRow>
        <CharacterInfoRow icon="💇‍" label="Hair color">
          {hair_color}
        </CharacterInfoRow>
      </CharacterInfoRowBox>
      <CharacterInfoRowBox>
        <CharacterInfoRow icon="🎨" label="Skin color">
          {skin_color}
        </CharacterInfoRow>
        <CharacterInfoRow icon="👀" label="Eye color">
          {eye_color}
        </CharacterInfoRow>
        <CharacterInfoRow icon="📆" label="Birth date">
          {birth_year}
        </CharacterInfoRow>
        <CharacterInfoRow icon="🧝🏻‍♀️‍" label="Gender">
          {gender}
        </CharacterInfoRow>
      </CharacterInfoRowBox>
    </div>
  </>
);

export default CharacterInfo;
