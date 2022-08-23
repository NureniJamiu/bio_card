import React from "react"
// eslint-disable-next-line
import {MaterialDesign} from "react-icons/md"
// eslint-disable-next-line
import {FontAwesome} from "react-icons/fa"
import {MdOutlineMailOutline} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"

export default function Info(props) {
    return (
	
	<>
	    <img src={require("./images/admin_1.jpg")} alt="admin"/>
    <div className="container">
	<h1 className="author-name">{props.name}</h1>
      <h3 className="author-spec">{props.specialization}</h3>
	<h5 className="author-website">
          <a href="https://dhulnurein.netlify.app" className="author-website">
        {props.website}
        </a>
      </h5>
      <div className="btn-container">
        <span className="btn email">
            <a href="mailto:nurenijamiu951@gmail.com" className="email">
		<MdOutlineMailOutline /> Email
          </a>
        </span>
    
        <span className="btn linkedin">
            <a href="https://www.linkedin.com/in/nurenijamiu" className="linkedin">
            <FaLinkedin /> LinkedIn
            </a>
    </span>
</div>
	</div>
		  </>
   )
}
