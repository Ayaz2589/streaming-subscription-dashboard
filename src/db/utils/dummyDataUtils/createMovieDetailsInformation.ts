import secrets from "../../../../secrets";
import { MovieAPIRequest, Movie, StreamingInformation } from "./types";

const urlList = `list=top_rated_lowest_100`;
const urlStartYear = `startYear=2000`;
const urlEndYear = `endYear=2023`;
const urlLimit = `limit=30`;
const urlBase = `https://moviesdatabase.p.rapidapi.com/titles?`;

const url = `${urlBase}${urlList}&${urlStartYear}&${urlEndYear}&${urlLimit}`;

const apiKey = secrets.createMovie.apiHeaders.apiKey.key;
const apiHost = secrets.createMovie.apiHeaders.apiHost.host;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
  },
};

const lorumIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

const createMovie = (movie: MovieAPIRequest): Movie => {
  const runtimeMinutes = generateRandomRuntimeMinutes();
  const streamingInformation: StreamingInformation =
    generateStreamingInformation(runtimeMinutes);
  return {
    id: movie._id,
    title: movie.titleText.text,
    releaseYear: movie.releaseYear.year,
    releaseDate: `${movie.releaseDate.day}/${movie.releaseDate.month}/${movie.releaseDate.year}`,
    primaryImage: movie.primaryImage.url,
    originalTitle: movie.originalTitleText.text,
    description: lorumIpsum,
    runtimeMinutes: runtimeMinutes,
    streaming_information: streamingInformation,
    isFavorite: randomBool(),
  };
};

const generateRandomRuntimeMinutes = (min = 100, max = 180) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateStreamingInformation = (
  runTime: number
): StreamingInformation => {
  const hasStarted = randomBool();
  let hasEnded;

  hasStarted ? (hasEnded = randomBool()) : (hasEnded = false);

  if (!hasEnded && !hasStarted) {
    return { hasStarted, hasEnded, minutesWatched: 0 };
  }

  if (!hasEnded && hasStarted) {
    const randomMinutes = Math.floor(Math.random() * (runTime - 1) + 1);
    return { hasStarted, hasEnded, minutesWatched: randomMinutes };
  }

  return { hasStarted, hasEnded, minutesWatched: runTime };
};

const randomBool = () => (Math.random() > 0.5 ? true : false);

const createMovieDetailsInformation = async () => {
  try {
    const response = await fetch(url, options);
    const { results } = await response.json();
    if (results?.length) {
      const formattedMovieObjectArray: Movie[] = results.map(
        (movie: MovieAPIRequest) => createMovie(movie)
      );
      return formattedMovieObjectArray;
    }
  } catch (error) {
    console.log(error);
  }
};

export default createMovieDetailsInformation;
