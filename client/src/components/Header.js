import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className="fullHeader">
            <div className="header">Gabby's Salsa</div>
            <div className="navigation"><br/>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/faqs">FAQs</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/logout">LogOut</Link>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}