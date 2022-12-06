import { useParams } from "react-router-dom"
import useFetch from "../useFetch/useFetch"
import { useNavigate } from "react-router-dom";
import  Popup from "reactjs-popup";
import EditForm from "../EditForm/EditForm";
import useConstant from "../useFetch/useConstant";

const RecipeDetails = () =>{
  const {url, DELETE} = useConstant()
  const { recipes } = useFetch(url);
  const param = useParams();
  const recipe = recipes.find((recipe) => recipe._id == param.id);
  const navigate = useNavigate()



  if (!recipe) return "Loading...";
  console.log(recipe);
  
  const handleDelete = async () => {
    const deleteR = await fetch(`${url}/${param.id}` ,{
      method: DELETE,
    });
    console.log(deleteR);
    navigate("/")
  };
  
  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.images} alt={recipe.title} />
      <h2>{recipe.body}</h2>
      
      <button onClick={handleDelete}>delete</button>
      <Popup trigger={<button>update</button>}>
        <EditForm recipe={recipe} />
      </Popup>
    </div>
  );
} 

export default RecipeDetails





