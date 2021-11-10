
export default function OrderCard({order}) {
    console.log(order)

    const {name, qty, price} = order

    return(
        <div>
            {name}<br/>
            Quantity: {qty}<br/>
            Price: {price*qty}<br/><br/><br/>
        </div>
    )
}