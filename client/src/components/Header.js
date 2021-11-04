import { Link } from 'react-router-dom'


export default function Header({currentUser}) {
    return (
        <div className="fullHeader">
            <div className="header">Gabby's Salsa</div>
            <div className="welcome">Welcome {currentUser.name}</div>
            <div className="navigation"><br/>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/products">Products</Link>
                <Link className="navLink" to="/about">About</Link>
                <Link className="navLink" to="/contact">Contact</Link>
                <Link className="navLink" to="/faqs">FAQs</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <Link className="navLink" to="/orders">Order History</Link>
                <Link className="navLink" to="/logout">LogOut</Link>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}