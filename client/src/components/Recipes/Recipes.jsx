import useFetch from "../useFetch/useFetch"
import Recipe from "./Recipe/Recipe"



const Recipes = () => {
// const {recipes}=useFetch()
const {recipes, isloading, error} =useFetch()






    return (
      <div>
        <div>{error ? error : null}</div>
        <div>{isloading ? "loading..." : ""}</div>
        <Recipe recipes={recipes} title="All Recipes" />
      </div>
    );
}

export default Recipes