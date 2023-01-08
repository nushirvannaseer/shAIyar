import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
	const [input, setInput] = useState("");

	return (
		<div className="my-12 mt-32 flex flex-col items-center justify-start">
			<h1 className=" font-display my-5 text-white font-bold text-2xl">shAIyar</h1>
			<p className=" font-display mb-5 mx-5 text-white text-sm text-opacity-50">
				Enter a sample input word, sentence or a verse. A list of words can be
				separated by spaces.{" "}
			</p>
			<input
				onChange={(e) => setInput(e.target.value)}
				value={input}
				className="border-2 p-1 px-4 w-1/3 rounded-2xl text-end"
			/>
			<button
				onClick={() => onSubmit(input)}
				className="font-display bg-blue-600 w-auto my-5 mx-5 px-10 py-1.5 text-white rounded-3xl focus: border-none active:bg-blue-700 active:border-black"
			>
				Generate
			</button>
		</div>
	);
};

export default SearchBar;
