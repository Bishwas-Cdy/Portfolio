import React, { useEffect } from "react";

import Nav from "../Nav.jsx";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<Nav active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
							Projects I've thrown into the void
						</div>

						<div className="subtitle projects-subtitle">
							Basically, I spend an unhealthy amount of time writing code that only sometimes works and then call it a “project.” A few of these disasters are open-source, which means you can not only laugh at my mistakes but also fix them if you're feeling brave. If you've got better ideas (spoiler: you do), feel free to jump in. I'll pretend to be open to feedback while secretly crying over merge conflicts.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
