import React, { useState } from "react";
import PropTypes from "prop-types";

const Light = props => {
	const handleClick = e => {
		// the color clicked is the second item of classList in target
		let colorclicked = e.target.classList[1];
		props.fSet({
			// only one property is true, the others are false
			red: colorclicked === "red",
			yellow: colorclicked === "yellow",
			green: colorclicked === "green"
		});
	};

	return (
		<div
			className={
				// the classList is ever: "light" + "<color>" + (glow)
				// (glow is present only if the stateVar of this color is true)
				`light ${props.color}${
					props.stateVar[props.color] ? " glow" : ""
				}`
			}
			onClick={handleClick}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	stateVar: PropTypes.object,
	fSet: PropTypes.func
};

export default Light;
