import "./landing.css";

export default function Landing() {
	return (
		<>
			<section className="landing-container">
				<div className="landing-content">
					<p className="landing-text">Hey Folks! I Am</p>
					<p className="landing-tag">{`<h1>`}</p>
					<h1 className="landing-heading">Prabhjot Singh</h1>
					<p className="landing-tag">{`</h1>`}</p>
					<p className="landing-text">An Aspiring Web Developer & Designer</p>
				</div>
			</section>
		</>
	);
}
