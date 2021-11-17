import { Link, useHistory } from 'react-router-dom'


export default function Header({currentUser, handleLogout}) {
    let history = useHistory()
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
                <Link className="navLink" to='/me' onClick={() => history.push('/me')}>My Account</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <Link className="navLink" to='/' onClick={handleLogout}>Logout</Link>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}