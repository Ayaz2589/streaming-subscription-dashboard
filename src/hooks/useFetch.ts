import { useState, useEffect } from "react";
import { createDummyDataJSON } from "../db/utils/dummyDataUtils";

const useFetch = () => {
  const [data, setData] = useState([]);
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
