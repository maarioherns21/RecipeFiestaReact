import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FileBase64 from "react-file-base64"
import "./EditForm.css"
import useConstant from "../useFetch/useConstant";

const EditForm = ({recipe})=> {
const {url, PATCH} =useConstant()
const [formData, setFormData] =useState({ title: recipe.title , body: recipe.body , creator: recipe.creator , images: recipe.images})
const [isPending , setIsPending] =useState(false)
const navigate = useNavigate()
const {id} = useParams()

const handleSubmit = async (e) => {
  e.preventDefault();
  const recipe = {
    title: formData.title,
    body: formData.body,
    creator: formData.creator,
    images: formData.images,
  };
  setIsPending(true);
  const newRecipe = await fetch(`${url}/${id}` , {
    method: PATCH,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  });
  const results = await newRecipe.json();
  //   setFormData(prev => [...prev, results], navigate("/"))
  navigate("/");
  setIsPending(false);
  console.log(results);
};

const clear = (e) => {
    e.preventDefault()
    setFormData({ title: recipe.title , body: recipe.body , creator: recipe.creator , images: recipe.images})
}

    return (
      <div className="form modal">
        <h1>Create Recipe</h1>
        <form className="modal-content" onSubmit={handleSubmit}>
          <input  value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
          <textarea  value={formData.body}  onChange={(e) => setFormData({ ...formData, body: e.target.value })} />
          <select value={formData.creator}  onChange={(e) => setFormData({ ...formData, creator: e.target.value })}  >
            <option value="mario">mario</option>
            <option value="mark">mark</option>
          </select>
          <FileBase64  value={formData.images} type="file" onDone={({base64}) =>  setFormData({ ...formData, images: base64})}/>
          <button>{isPending ? "Updating.." : "Update Recipe"}</button>
          <button onClick={clear}>clear</button>
        </form>
      </div>
    );
}

export default EditForm