import { User, Movie } from "../../utils/dummyDataUtils/types";

export default interface InitialState {
  data: { users: User[]; movies: Movie[] };
}
