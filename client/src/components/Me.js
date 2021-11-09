export default function Me({ currentUser, cartItems }) {

    console.log(cartItems)
    return (
        <div><br /><br /><br/>
            <div><h2>{currentUser.name}'s Account Info</h2></div>
            <div>
                <h3>Username: {currentUser.username}</h3>
                <h3>Email on file:  {currentUser.email}</h3><br /><br/>
                <ul className="orderHistory">
                    <h3>{currentUser.name}'s Order History</h3>
                    <li>Previous Order</li>
                </ul>
            </div>
        </div>
    );
}