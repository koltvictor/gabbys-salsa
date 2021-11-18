import React  from "react"
import {useHistory} from "react-router-dom"



export default function ThankYou(){

    const history = useHistory()

    function handleLocalStorage() {
        window.localStorage.clear()       
        console.log(localStorage)
        history.push('/')
        window.location.reload()
    }
    return(
        <div className="thankYou"><br/><br/>
            <h1>ORDER CONFIRMATION</h1>
            <h3>Your order has been received.  Please allow for ground shipping timeline.</h3>
            <h3>You will receive an email with payment confirmation shortly.</h3>
            <h3>If you have any questions or concerns please contact us.</h3>
            <h3>Thank you for your order and for supporting local business!</h3>
            <button onClick={handleLocalStorage} className="thankYouButton">Return to Home</button>
        </div>
    )
}