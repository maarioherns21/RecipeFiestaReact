import mongoose from "mongoose"
const Schema =  mongoose.Schema




const recipeSchema = new Schema({
  title: String,
  body: String,
  creator: String,
  images: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});



const Recipe = mongoose.model("recipe", recipeSchema, "recipe")

const mySchemas = {  "Recipe" : Recipe }

export default mySchemas