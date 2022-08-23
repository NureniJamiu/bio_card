import React from "react"

export default function Bio(props) {
    return (
	<div className="container bio">
      <h2 className="bio-subhead">About</h2>
	    <p className="bio-text">{props.content}</p>
      <br/>
    </div>
    )
}
