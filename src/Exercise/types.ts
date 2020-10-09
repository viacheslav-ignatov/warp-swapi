export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface Film {
  characters: Character[];
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

export interface Films {
  count: number;
  results: Film[];
}

export enum GenderEmoji {
  Male = "👨🏻",
  Female = "👩🏽",
  NA = "🤖👽",
}
