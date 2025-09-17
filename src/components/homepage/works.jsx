import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Life</div>
							<div className="work-subtitle">
								Unemployed
							</div>
							<div className="work-duration">2005-2024</div>
						</div>

						<div className="work">
							<div className="work-title">University</div>
							<div className="work-subtitle">
								Very Very Unemployed
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
