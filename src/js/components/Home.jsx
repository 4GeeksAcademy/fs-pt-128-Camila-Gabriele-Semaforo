import React, { useState } from "react";


//include images into your bundle


//create your first component
const Home = () => {
	const [luzActiva, setLuzActiva] = useState ("")
	return (
		<>
			<div className="soporte-semaforo"></div>
			<div className="contenedor-semaforo">
				<button type="button" class={`btn btn-danger  ${luzActiva == "red" ? "light-on" : ""}`} onClick={() => setLuzActiva ("red")}></button>
				<button type="button" class={`btn btn-warning  ${luzActiva == "yellow" ? "light-on" : ""}`} onClick={() => setLuzActiva("yellow")}></button>
				<button type="button" class={`btn btn-success ${luzActiva == "green" ? "light-on" : ""}`} onClick={() => setLuzActiva("green")}></button>
			</div>
		</>
	);
};

export default Home;