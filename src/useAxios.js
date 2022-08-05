import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  const [trigger, setTrigger] = useState(0);
  const reFetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, error });
      });
  }, [trigger]);
  return { ...state, reFetch };
};
