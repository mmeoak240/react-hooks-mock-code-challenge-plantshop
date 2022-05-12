import React, { useState } from "react";

function NewPlantForm({ plants, handleSubmit }) {
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		price: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	// console.log(formData);
	return (
		<div className="new-plant-form">
			<h2>New Plant</h2>
			<form onSubmit={(e) => handleSubmit(e, formData)}>
				<input
					type="text"
					name="name"
					placeholder="Plant name"
					value={formData.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="image"
					placeholder="Image URL"
					value={formData.image}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="price"
					step="0.01"
					placeholder="Price"
					value={parseFloat(formData.price)}
					onChange={handleChange}
				/>
				<button type="submit">Add Plant</button>
			</form>
		</div>
	);
}

export default NewPlantForm;

// function handleSubmit(e) {
//   e.preventDefault();
//   const newPlant = {
//     name: plants.name,
//     image: plants.image,
//     price: plants.price,
//   };
//   // console.log(newPlant);

//   fetch("http://localhost:6001/plants", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(),
//   })
//     .then((r) => r.json)
//     .then();
// }

// onSubmit={handleSubmit}
