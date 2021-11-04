export default function Me({ currentUser }) {

    return (
        <div><br /><br /><br/>
            <div><h2>{currentUser.username}'s Account Info</h2></div>
            <div>
                <h3>Hi {currentUser.username}!</h3>
                <h3>Your email on file:  {currentUser.email}</h3><br /><br/>
                <ul className="orderHistory">
                    <h3>Order History</h3>
                </ul>
            </div>
        </div>
    );
}