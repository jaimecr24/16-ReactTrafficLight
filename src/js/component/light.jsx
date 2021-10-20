import React, { useState } from "react";
import PropTypes from "prop-types";

const Light = props => {
	const handleClick = e => {
		// the color clicked is props.color
		props.fSet({
			// only one property is true, the others are false
			red: props.color === "red",
			yellow: props.color === "yellow",
			green: props.color === "green"
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
