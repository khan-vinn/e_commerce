import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <><NavLink to="/products">Shopping </NavLink></>
            <><NavLink to="/selected">Selected Products</NavLink></>
            <><NavLink to="/cards">Cards</NavLink></>
            <><NavLink to="/add-product">Add Product</NavLink></>
            <><NavLink to="/login">Login</NavLink></>
        </header>
    );
}
export default Header;
