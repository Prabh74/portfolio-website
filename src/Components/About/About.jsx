import React, { useEffect, useRef } from "react";
import "./about.css";

export default function About() {
	const aboutContainer = useRef();
	const aboutTxt1 = useRef();
	const aboutTxt2 = useRef();

	useEffect(() => {
		function onScrollAnimation(e) {
			let screenH = window.innerHeight;
			let coords = e.getBoundingClientRect();
			let visibleH = Math.floor(((screenH - coords.y) / e.offsetHeight) * 50);

			// if(visibleH > 50){
			//     visibleH = 50
			// }

			if(coords){
				aboutTxt1.current.style.transform = `translate(${visibleH - 50}%)`;
				aboutTxt2.current.style.transform = `translate(${50 - visibleH}%)`;
			}


			// console.log(coords.y)

			// console.log(visibleH);
		}

		window.addEventListener("scroll", (e) => {
			onScrollAnimation(aboutContainer.current);
		});
	});

	return (
		<section className="about-container" ref={aboutContainer}>
			<h1 className="about-bg-txt about-bg-txt-1" ref={aboutTxt1}>
				ABOUT
			</h1>
			<h1 className="about-bg-txt about-bg-txt-2" ref={aboutTxt2}>
				ABOUT
			</h1>
			{/* <h1 className="about-heading">About Me</h1> */}

			<p className="about-content">
				Hey Visitor! I am Prabhjot Singh, an engineering student at IIT Roorkee
				and this website serves as a creative outlet for my mind. I am an
				aspiring web developer with a focus on providing users with an
				interactive and smooth experience on the web.
			</p>
		</section>
	);
}
