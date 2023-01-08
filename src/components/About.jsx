import React from "react";

const About = () => {
	return (
		<div id="about" className="font-display py-16">
			<div className="mx-auto text-center py-16 border-yellow-300 shadow-lg rounded-xl bg-blue-900 w-2/3  text-white">
				<h2 className="font-bold text-2xl mb-5">About shAIyar</h2>
				<p
					className="text-justify mx-auto w-4/5 text-xs
				 md:text-md font-display"
				>
					shAIyar started out as an FYP project in 2021 under the guidance of
					Mirza Sarim Baig. The motivation behind the project was to create an
					Urdu language model that would be able to understand context and
					generate original sentences. For this, loads of data scraping was
					required. A transformer based model was used as the basis for shAIyar.
					Being one of the first Urdu generational models, shAIyar is far from
					perfect. You may find that sometimes, the output may not make complete
					grammatical sense. Due to limited resources, this was the extent to
					which shAIyar could be trained. The shAIyar team however aims to
					improve and fine-tune the model to be better at generating original
					coherent lines of poetry.
				</p>
			</div>
		</div>
	);
};

export default About;
