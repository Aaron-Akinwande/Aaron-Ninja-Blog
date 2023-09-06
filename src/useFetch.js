import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [fail, setFail] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setPending(false);
          setFail(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch has been Aborted");
          } else {
            setPending(false);
            setFail(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, pending, fail };
};

export default useFetch;
