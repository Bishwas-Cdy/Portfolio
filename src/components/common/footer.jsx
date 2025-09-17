import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/about">About</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/articles">Articles</NavLink>
						</li>
						<li className="footer-nav-link-item">
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Bishwas All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
