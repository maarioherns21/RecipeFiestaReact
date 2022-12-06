import mySchemas from "../modal/recipe.js"


const index = async (req, res) => {
  const recipe = mySchemas.Recipe;
  try {
    const data = await recipe.find();

    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  // const { body, title, creator, images } = req.body;
  const { title, body, creator, images } = req.body;
  // const recipe = req.body;
  // console.log(recipe)
  const newRecipe = new mySchemas.Recipe({ title, body, creator, images });
  // const newRecipe = new mySchemas.Recipe({ ...recipe})
  console.log(newRecipe);
  try {
    const saveRecipe = await newRecipe.save();

    res.status(200).json(saveRecipe);
  } catch (error) {
    console.log(error.message);

    res.status(404).json({ message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, body, creator, images } = req.body;
  try {
    const updateRecipe = { title, body, creator, images, _id: id };

    const newRecipe = await mySchemas.Recipe.findByIdAndUpdate( id, updateRecipe, { new: true }
    );

    res.json(newRecipe);
  } catch (error) {
    console.log(error.message);

    res.json({ message: error.message });
  }
};


const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRecipe = await mySchemas.Recipe.findByIdAndRemove(id);

    res.json({ message: `${deleteRecipe} deleted successfully.` });
  } catch (error) {
    console.log(error.message);

    res.json({ message: error.message });
  }
};

const CTRL = {"index":index, "createRecipe": createRecipe, "deleteRecipe": deleteRecipe, "updateRecipe": updateRecipe}

export default CTRL


