import { useEffect, useState } from "react";



const useFetch = (url) =>{
    const [recipes, setRecipes] =useState([])
    const [error, setError] =useState([])
    const [isloading, setIsLoading] =useState(true)

    useEffect(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            console.log(data)
          setRecipes(data);
          setIsLoading(false)
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false)
        });
    }, [url]);

   return {
    recipes, error, isloading
   }
}

export default useFetch