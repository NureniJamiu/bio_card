import React from "react"
import Info from "./Info"
import Bio from "./Bio"
import Footer from "./Footer"

export default function App() {
    return (
	<div>
	    <Info 
	        image="./images/admin_1.jpg"
	        name="Nureni Jamiu"
	        specialization="Fullstack Developer"
	        website="dhulnurein.netlify.app"
	        />
	    <Bio 	        content="I am a Fullstack Web Developer with a holistic knowledge of the Software Development and Design processes. I am also a UI/UX designer who has a flair for creating elegant solutions to challenges.You can always reach out to me via any of links provided in this card."/>
	    <Footer />
	</div>		
    )
}
