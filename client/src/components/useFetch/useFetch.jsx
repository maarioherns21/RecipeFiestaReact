import { useEffect, useState } from "react";



const useFetch = () =>{
    const [recipes, setRecipes] =useState([])
    const [error, setError] =useState([])
    const [isloading, setIsLoading] =useState(true)
    
    useEffect(() => {
      fetch("http://localhost:4000/recipes")
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
    }, []);

   return {
    recipes, error, isloading
   }
}

export default useFetch