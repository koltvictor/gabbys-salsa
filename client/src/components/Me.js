export default function Me({ currentUser, order }) {
    console.log(order)
    return (
        <div>
            <div>
                <h1 className="accountHead">{currentUser.name}'s Account Info</h1>
            </div>
            <div>
                <h3>Username: {currentUser.username}</h3>
                <h3>Email on file:  {currentUser.email}</h3><br /><br/>
                <ul className="orderHistory">
                    <h3>{currentUser.name}'s Order History</h3>
                    
                        {/* {order.map((data) => {
                            console.log(data)
                            return(
                                <li
                                    key={data.id}
                                    product={data.name}
                                />
                )
            })} */}
                </ul>
            </div>
        </div>
    );
}