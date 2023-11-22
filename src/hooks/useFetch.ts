import { useState, useEffect } from "react";
import { createDummyDataJSON } from "../utils/v1";
import { User, Movie } from "../utils/v1/dummyDataUtils/types";
import secrets from "../../secrets";

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
  const [useAPI] = useState(false);

  useEffect(() => {
    const frontendFetch = async () => {
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

    const backendFetch = async () => {
      const { baseUrl } = secrets.backend;
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/api/dashboard/get-dummy-data`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    useAPI ? backendFetch() : frontendFetch();
  }, []);

  return { data, loading, error };
};

export default useFetch;
