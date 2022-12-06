import {Link} from "react-router-dom"


const Recipe = ({ recipes, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`} >
            <img src={recipe.images} alt={recipe.title} />
               <h2>{recipe.title}</h2>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Recipe