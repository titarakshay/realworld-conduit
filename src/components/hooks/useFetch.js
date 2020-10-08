import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function useFetch(url) {
  let [data, setdata] = useState(null);
  let [error, seterror] = useState(null);

  useEffect(() => {
    Axios.get(url)
      .then(({ data }) => setdata(data))
      .catch((error) => seterror(error));
  }, []);
  return { data, error };
}
