import { useState, useEffect } from "react";
import { createDummyDataJSON } from "../db/utils";
import { User, Movie } from "../db/utils/dummyDataUtils/types";

interface UseFetch {
  data: Data;
  loading: boolean;
  error: boolean;
}

interface Data {
  users: User[];
  movies: Movie[];
}

const useFetch = (): UseFetch => {
  const [data, setData] = useState<Data>({ users: [], movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await createDummyDataJSON();
        const data = JSON.parse(response);
        setData(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
