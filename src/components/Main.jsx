import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Output from "./Output";
import axios from "axios";

const Main = () => {
	const [output, setOuptut] = useState(null);
	const onSubmit = async (words) => {
		setOuptut(undefined);
		const response = await axios.post("http://127.0.0.1:8000/", {
			words,
		});
		console.log("AAAAAAAA RESPONSE", response.data);
		setOuptut(response.data);
	};
	return (
		<div className="text-center">
			<SearchBar onSubmit={onSubmit} />
			<Output data={output} />
		</div>
	);
};

export default Main;
