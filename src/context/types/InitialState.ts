import { User, Movie } from "../../db/utils/dummyDataUtils/types";

export default interface InitialState {
  data: { users: User[]; movies: Movie[] };
}
