import {Link} from 'react-router-dom'
import './Style.css'

const NavBar = () => {


    return (
      <div className='nav'>
        <Link to="/" className='text'>Home</Link>
        <Link to="/form" className='text'>New Recipe</Link>
        <Link to="/myrecipes" className='text'>My Recipes</Link>
      </div>
    );


}


export default NavBar;