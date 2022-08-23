import React from "react"
// eslint-disable-next-line
import {FontAwesome} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"


export default function Footer() {
    return (
	<div className="container footer">
      <div className="footer-flex">
        <a href="https://twitter.com/dhulnurein_?t=6WsdplbXuU1-FPICnbpOmQ&s=09">
            <FaTwitterSquare size={60}/>
        </a>
        <a href="https://www.instagram.com/dhulnurein_">
            <FaInstagramSquare size={60} />
        </a>
        <a href="https://github.com/NureniJamiu">
            <FaGithubSquare size={60} />
        </a>
      </div>
    </div>
    )
}
