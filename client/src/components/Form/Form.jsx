import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64"
import "./Form.css"

const Form = ()=> {
const [formData, setFormData] =useState({ title: "" , body:"" , creator: "mario" , images:""})
const [isPending , setIsPending] =useState(false)
const navigate = useNavigate()


const handleSubmit = async (e) => {
  e.preventDefault();
  const recipe = {
    title: formData.title,
    body: formData.body,
    creator: formData.creator,
    images: formData.images,
  };
  setIsPending(true);
  const newRecipe = await fetch("http://localhost:4000/recipes/new", {
    method: "POST",
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
    setFormData({ title: "" , body:"" , creator: "mario" , images:""})
}

    return (
      <div className="form">
        <h1>Create Recipe</h1>
        <form onSubmit={handleSubmit}>
          <input  value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
          <textarea  value={formData.body}  onChange={(e) => setFormData({ ...formData, body: e.target.value })} />
          <select value={formData.creator}  onChange={(e) => setFormData({ ...formData, creator: e.target.value })}  >
            <option value="mario">mario</option>
            <option value="mark">mark</option>
          </select>
          <FileBase64  value={formData.images} type="file" onDone={({base64}) =>  setFormData({ ...formData, images: base64})}/>
          <button>{isPending ? "Adding.." : "Add Recipe"}</button>
          <button onClick={clear}>clear</button>
        </form>
      </div>
    );
}

export default Form