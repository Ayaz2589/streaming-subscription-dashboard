export default interface Movie {
  id: string;
  title: string;
  releaseYear: number;
  releaseDate: string;
  primaryImage: string;
  originalTitle: string;
  description: string;
  runtimeMinutes: number;
  streaming_information: {
    hasStarted: boolean;
    hasEnded: boolean;
  };
  isFavorite: boolean;
}
