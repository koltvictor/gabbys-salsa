import OrderCard from './OrderCard';

export default function Me({ currentUser, order }) {
    console.log(order)

    const orders = order.map((data) => {
        console.log(data)
        return (
            <OrderCard
                key={data.id}
                id={data.id}
                order={data}
            />
        )
    })
    return (
        <div>
            <div>
                <h1 className="accountHead">{currentUser.name}'s Account Info</h1>
            </div>
            <div className="accountWrapper">
                <h3>Username: {currentUser.username}</h3>
                <h3>Email on file:  {currentUser.email}</h3><br /><br/>
                <ul className="orderHistory">
                    <h3>{currentUser.name}'s Password Reset</h3>
                </ul>
            </div>
        </div>
    );
}