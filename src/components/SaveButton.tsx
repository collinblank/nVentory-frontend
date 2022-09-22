import React from "react";


function SaveButton() {
	const buttonStyle = {
		padding: '5px 13px',
		borderRadius: '20px',
		backgroundColor: '#a9e2a8',
		border: '.1em solid #86868621',
		color: '#fff',
		fontFamily: 'Slack-Lato, Slack-Fractions, applelogo, sans-serif',
		fontSize: '1rem'
	};

	return (
		<div>
          <button style={buttonStyle} className="saveButton">Save</button>  
		</div>
	);
};

export default SaveButton;