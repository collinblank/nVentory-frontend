import React from "react";
import logoSrc from "../assets/nVentory_logo_Layered.png";

function Logo() {
	const logoStyle={
		height: "3.5em",
		width: "auto"
	}

	return (
		<>
    	    <img src= {logoSrc} alt="nVentory Logo" style={logoStyle}/>
		</>    
	)
}

export default Logo