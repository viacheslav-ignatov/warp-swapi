import React, { FC } from "react";
import { ExpansionPanel } from "../../../core-ui";
import { Film } from "../../types";
import CharacterList from "../Characters/CharacterList";

interface FilmListItemProps {
  film: Film;
}

const FilmListItem: FC<FilmListItemProps> = ({
  film: { title, characters },
}) => {
  return (
    <li className="border mt-2 cursor-pointer">
      <ExpansionPanel
        classNamesSummaryContainer="text-lg bg-blue-200 hover:bg-blue-300 font-bold p-3"
        summary={`🎥 ${title}`}
      >
        <CharacterList characters={characters} />
      </ExpansionPanel>
    </li>
  );
};

export default FilmListItem;
