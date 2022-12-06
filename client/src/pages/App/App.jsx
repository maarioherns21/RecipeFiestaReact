import Home from "../Home/Home"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import RecipeDetails from "../../components/Recipes/RecipeDetails";
import NavBar from "../../components/NavBar/NavBar";
import Form from "../../components/Form/Form";
import MyRecipes from "../MyRecipes/MyRecipes";


const App = () => {


    return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipe/:id" element={<RecipeDetails />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/myrecipes" element={<MyRecipes />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App