import React, { FC } from "react";
import FilmList from "./Components/Films";
import { FILMS } from "./data/films";

interface ExerciseProps {}

const Exercise: FC<ExerciseProps> = () => {
  return (
    <>
      <FilmList films={FILMS} />
    </>
  );
};

export default Exercise;
