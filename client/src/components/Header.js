import { Link, useHistory } from 'react-router-dom'



export default function Header({currentUser, handleLogout, items}) {
    let history = useHistory()
    return (
        <div className="fullHeader">
            <div className="header">Gabby's Salsa</div>

            <div className="navigation"><br/>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/products">Products</Link>
                <Link className="navLink" to="/about">About</Link>
                <Link className="navLink" to="/contact">Contact</Link>
                <Link className="navLink" to="/faqs">FAQs</Link>
                <Link className="navLink" to='/me' onClick={() => history.push('/me')}>{currentUser.name}'s Account</Link>
                {items !== null && (
                <Link className="navLink" to="/cart">Cart</Link>
                )}
                <Link className="navLink" to='/' onClick={handleLogout}>Logout</Link>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}