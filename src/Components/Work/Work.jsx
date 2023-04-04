import { useRef, useEffect } from "react";
import "./work.css";

export default function Work() {

    const workContainer = useRef()
    const workTxt = useRef()

    useEffect(() => {
		function onScrollAnimation(e) {
			let screenH = window.innerHeight;
			let coords = e.getBoundingClientRect();
			let visibleH = Math.floor(((screenH - coords.y) / e.offsetHeight) * 50);
            console.log(visibleH)
            console.log(`translateY(${-1 * visibleH}%)`)
				workTxt.current.style.bottom = `${visibleH}%`;

		}

		window.addEventListener("scroll", (e) => {
			onScrollAnimation(workContainer.current);
		});
	});

	return (
		<section className="work-container" ref={workContainer}>
            <h1 className="work-txt-animate" ref={workTxt}>W <br /> O <br /> R <br /> K</h1>
			<div className="work-headings">
				<WorkGroup name="Gsheetpress" caption="Internship" />
				<WorkGroup name="Cognizance" caption="Annual Technical Fest IITR" />
				<WorkGroup name="Hostel Website" caption="Project" />
				<WorkGroup name="Survey Questionnaire" caption="Project" />
				{/* <WorkGroup name="Portfolio Website" caption="Personal Diary" /> */}
			</div>
		</section>
	);
}

function WorkGroup({ name, caption }) {
	return (
		<section className="workgroup">
			<h1 className="wg-main">{name}</h1>
			<h2 className="wg-caption">{caption}</h2>
		</section>
	);
}
