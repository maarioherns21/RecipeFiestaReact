import express from "express";
import CTRL from "../controllers/recipes.js";
const router = express.Router();



router.get("/", CTRL.index);


router.post("/new" , CTRL.createRecipe)

router.patch('/:id' , CTRL.updateRecipe)

router.delete("/:id" , CTRL.deleteRecipe )


export default router;
