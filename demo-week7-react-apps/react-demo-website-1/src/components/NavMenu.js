//-- NavMenu.js -- 

import {Link} from 'react-router-dom';

//function NavMenu(props) 
const NavMenu = (props) => {
return (
    <>
        <nav>
             <a href="#">Home</a>
             {" "}
             <a href="#">About</a>
        </nav>    
    </>
)}

//refactor: add css style to component/elements
export default NavMenu;
