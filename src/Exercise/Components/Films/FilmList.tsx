import React, { FC } from "react";
import FilmListItem from "./FilmListItem";
import { Films } from "../../types";

interface FilmListProps {
  films: Films;
}

const FilmList: FC<FilmListProps> = ({ films: { results } }) => {
  return (
    <ul className="px-2">
      {results.map((film) => (
        <FilmListItem key={film.episode_id} film={film} />
      ))}
    </ul>
  );
};

export default FilmList;
