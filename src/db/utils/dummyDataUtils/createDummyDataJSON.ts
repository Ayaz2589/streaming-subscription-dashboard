import { Movie, User, JSONObject } from "./types";
import {
  createPersonalInformation,
  createMovieDetailsInformation,
  createStreamingInformtion,
} from ".";

const getRandomItemdFromArray = (inputArray: Movie[]) => {
  const newArray = [];

  const randomItemCount = Math.floor(Math.random() * inputArray.length) + 1;
  const shuffledArray = inputArray.slice().sort(() => Math.random() - 0.5);

  for (let i = 0; i < randomItemCount; i++) {
    newArray.push(shuffledArray[i]);
  }

  return newArray;
};

const createDummyDataJSON = async () => {
  const users = await createPersonalInformation();
  const movies = await createMovieDetailsInformation();

  if (users?.length !== 30 && movies?.length !== 30) {
    throw new Error("Error creating dummy data");
  }

  if (users?.length && movies?.length) {
    const objectToReturn = users?.reduce<User[]>((accum, value) => {
      return [
        ...accum,
        {
          ...value,
          streaming: createStreamingInformtion(),
          movies: getRandomItemdFromArray(movies),
        },
      ];
    }, [] as JSONObject[]);
    return JSON.stringify(objectToReturn);
  }

  return "[]";
};

export default createDummyDataJSON;
