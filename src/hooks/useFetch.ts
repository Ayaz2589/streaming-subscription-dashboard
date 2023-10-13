import { useState, useEffect } from "react";
import { createDummyDataJSON } from "../db/utils/dummyDataUtils";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await createDummyDataJSON();
      const data = JSON.parse(response);

      setData(data);
    };
    getData();
  }, []);

  return { data };
};

export default useFetch;
