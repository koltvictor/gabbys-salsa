import React from "react";

export default function Home ({currentUser}){
    return(
        <div className="homeWrapper">
            <h3 className="homePageTextWrapper"><div className="homePageText1">Authentic Recipe.</div><div className="homePageText2"> Small batch.</div><div className="homePageText3"> Made to order with the freshest ingredients.</div><div className="homePageText">Delivered to your door.</div></h3><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/* <img className="homeImg" src="https://lamexicanasalsa.com/sites/default/files/styles/hero_image_wide/public/home-page-hero/adobestock_63761459.jpeg?itok=cVmA3xIQ&c=65deca89467f7c4979381d60f2d363df" alt="Mexican Salsa"/> */}
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            <div className="newsletter">
                <h3 className="newsletter-title">Upcoming Events</h3>
            </div>
            <div className="events">
                <ul>
                    <li>
                        DATE TIME EVENT LOCATION
                    </li>
                    <li>
                        DATE TIME EVENT LOCATION
                    </li>
                    <li>
                        DATE TIME EVENT LOCATION
                    </li>
                    <li>
                        DATE TIME EVENT LOCATION
                    </li>
                    <li>
                        DATE TIME EVENT LOCATION
                    </li>
                    <li>
                        DATE TIME EVENT LOCATION
                    </li>
                </ul>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="footer">
                <>
                    info@gabbyssalsa.com<br/>
                    1234 Big Wok Way<br/>
                    Las Vegas, NV 89117<br/>
                    © GM Salsa Labs 2021. All rights reserved.
                </>
            </div>
        </div>
    )
}