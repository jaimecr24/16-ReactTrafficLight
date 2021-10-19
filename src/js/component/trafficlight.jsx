import React, { useState } from "react";

import Light from "./light.jsx";

const TrafficLight = () => {
	const [selected, setSelected] = useState({
		// initial state
		// selected & setSelected will be passed to Light component
		// Light component handles click event and change 'selected' if necesary
		red: false,
		yellow: false,
		green: true
	});

	return (
		<div id="container">
			<div className="traffic-top"></div>
			<div className="traffic-light">
				<Light color="red" stateVar={selected} fSet={setSelected} />
				<Light color="yellow" stateVar={selected} fSet={setSelected} />
				<Light color="green" stateVar={selected} fSet={setSelected} />
			</div>
		</div>
	);
};

export default TrafficLight;
