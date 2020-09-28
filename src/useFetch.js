import {useState, useEffect} from 'react';

const useFetch = (callback, url) => {
  const [loading , setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(url)
    .then(res => res.json())
    .then(json => {
      callback(json);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);  

  return loading;
}

export default useFetch;