//-- NavMenu.js -- 

import {Link} from 'react-router-dom';

//function NavMenu(props) 
const NavMenu = (props) => {
return (
    <>
        <nav>
             <Link to="/">Home</Link>
             {" "}
             <Link to="/about">About</Link>
        </nav>    
    </>
)}

//refactor: add css style to component/elements
export default NavMenu;
