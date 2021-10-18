import React, { useState } from "react";

const TrafficLight = () => {
	const [selected, setSelected] = useState("green");

	let classObj = {
		red: `light red${selected == "red" ? " glow" : ""}`,
		yellow: `light yellow${selected == "yellow" ? " glow" : ""}`,
		green: `light green${selected == "green" ? " glow" : ""}`
	};

	const handleClick = e => {
		let colorclicked = e.target.classList[1];
		if (selected !== colorclicked) {
			classObj[selected] = `light ${selected}`;
			classObj[colorclicked] = `light ${colorclicked} glow`;
			setSelected(colorclicked);
		}
	};

	return (
		<div id="container">
			<div className="traffic-top"></div>
			<div className="traffic-light">
				<div className={classObj["red"]} onClick={handleClick}></div>
				<div className={classObj["yellow"]} onClick={handleClick}></div>
				<div className={classObj["green"]} onClick={handleClick}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
