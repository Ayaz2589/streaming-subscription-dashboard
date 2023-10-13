export type { default as User } from "./User/User";
export type { default as UserAPIRequest } from "./User/UserAPIRequest";
export type { default as MovieAPIRequest } from "./Movie/MovieAPIRequest";
export type { default as Movie } from "./Movie/Movie";
export type { default as Streaming } from "./Streaming";

import { Movie, User } from ".";

export interface JSONObject extends User {
  movies: Movie[];
  streaming: {
    [key: string]: string;
  };
}
