export default function About ({currentUser}) {
    return (
        <div className="about">
            <h1 className="aboutHead">About Gabby</h1>
            <p className="aboutBody">
            <strong>Hi, {currentUser.name}</strong>!  Let me introduce you to the brains and style of the operation: <strong>Gabby</strong>.  Born and raised in Las Vegas, Gabby grew up learning how to cook Mexican meals by helping her mom in the kitchen. She painstakingly learned the ins-and-outs of traditional Mexican cooking and developed her own flair over the years.  Salsa Verde has always been a traditional part of Gabby's family's meals and over the years, the recipe has been developed into what it is today! Still one of the musts in Gabby's household, she is so thrilled to welcome everyone to bring the recipe into their own family gatherings.  The Red Salsa is the newest addition to Gabby's salsa must-haves.  Savory and delicious, all of Gabby's Salsas are traditional, delectible, and delicious.  Guaranteed to have the freshest ingredients in every batch with <strong>big</strong> flavor!
            </p>
            <img src="http://s3.wp.wsu.edu/uploads/sites/2055/2017/07/iStock-477239111-1024x683.jpg" alt="salsa" className="aboutImg"/>
        </div>)
}