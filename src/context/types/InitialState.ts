import { User, Movie } from "../../utils/v1/dummyDataUtils/types";

export default interface InitialState {
  data: { users: User[]; movies: Movie[] };
}
