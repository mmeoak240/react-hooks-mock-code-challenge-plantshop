import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
	const [plants, setPlants] = useState([]);
	const [search, setSearch] = useState("");

	function handleSubmit(e, newPlant) {
		e.preventDefault();
		fetch("http://localhost:6001/plants", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPlant),
		})
			.then((r) => r.json())
			.then(setPlants({ newPlant, ...plants }));
	}

	useEffect(() => {
		fetch("http://localhost:6001/plants")
			.then((r) => r.json())
			.then((data) => setPlants(data));
	}, []);

	console.log(plants);

	return (
		<main>
			<NewPlantForm plant={plants} handleSubmit={handleSubmit} />
			<Search search={search} setSearch={setSearch} />
			<PlantList
				plants={plants}
				setPlants={setPlants}
				search={search}
				setSearch={setSearch}
			/>
		</main>
	);
}

export default PlantPage;
