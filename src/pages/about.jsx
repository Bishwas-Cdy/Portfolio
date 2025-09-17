import React, { useEffect } from "react";

import Nav from "../Nav.jsx";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<Nav active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<div className="about-skills-section">
									<div className="about-skills-title">Skills</div>
									<div className="about-skills-list">
										<div className="about-skill">Python</div>
										<div className="about-skill">Django</div>
										<div className="about-skill">Flask</div>
										<div className="about-skill">FastAPI</div>
										<div className="about-skill">ML</div>
										<div className="about-skill">Computer Vision</div>
										<div className="about-skill">HTML</div>
										<div className="about-skill">CSS</div>
										<div className="about-skill">JavaScript</div>
										<div className="about-skill">React</div>
										<div className="about-skill">MySQL</div>
										<div className="about-skill">Supabase</div>
										<div className="about-skill">Linux</div>
										<div className="about-skill">Neovim</div>
										<div className="about-skill">Hyprland</div>
										<div className="about-skill">Figma</div>
										<div className="about-skill">Arduino</div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.JPEG"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
