import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<NavLink to="/">Home</NavLink>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<NavLink to="/about">About</NavLink>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<NavLink to="/projects">Projects</NavLink>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<NavLink to="/articles">Articles</NavLink>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
