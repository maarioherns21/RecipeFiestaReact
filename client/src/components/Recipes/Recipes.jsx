import useConstant from "../useFetch/useConstant"
import useFetch from "../useFetch/useFetch"
import Recipe from "./Recipe/Recipe"



const Recipes = () => {
// const {recipes}=useFetch()
const {url} =useConstant()
const {recipes, isloading, error} =useFetch(url)






    return (
      <div>
        <div>{error ? error : null}</div>
        <div>{isloading ? "loading..." : ""}</div>
        <Recipe recipes={recipes} title="All Recipes" />
      </div>
    );
}

export default Recipes