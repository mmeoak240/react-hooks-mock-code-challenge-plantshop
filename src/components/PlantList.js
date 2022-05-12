import React from "react";
import PlantCard from "./PlantCard";
import Search from "./Search";

function PlantList({ plants, search }) {
	const displayPlants = plants.filter((plant) =>
		plant.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<ul className="cards">
			{displayPlants.map((plant) => (
				<PlantCard plant={plant} />
			))}
		</ul>
	);
}

export default PlantList;
