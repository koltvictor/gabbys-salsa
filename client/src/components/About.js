export default function About ({currentUser}) {
    return (
        <div className="about">
            <h1 className="aboutHead">About Gabby</h1>
            <p className="aboutBody">
            <strong>Hi, {currentUser.name}</strong>!  And welcome to Gabby's Salsa!  Hold on to your hat, because Gabby uses the freshest, highest quality ingredients to create the best salsas you can imagine.  She's kind of remarkable.<br/><br/>
                La Mexicana is a maker of salsas made with farm-fresh ingredients. We source our ingredients from farms that grow the freshest vegetables year ’round — firm sun-ripened tomatoes, crisp onion, zesty jalapeño, and fresh cilantro. 
                Our farms are close to our kitchens, so when the crated veggies arrive, we work quickly to capture all the goodness, texture, and flavor. We chop, blend, season, and pack in 48 hours. This gives you a product that­’s perfect with chips or as an accompaniment to your favorite recipes.
<br/><br/>
    ITALIAN ROSE GARLIC PRODUCTS LLC
    Italian Rose Garlic Products LLC is a manufacturer and distributor of salsas, dips, sauces, and spreads for retail stores and restaurants.
<br/><br/>
    Italian Rose was founded in 1979, and for over 30 years we have built our business based on one simple concept… we can deliver a superior flavor experience that customers will remember!
            </p>
        </div>)
}