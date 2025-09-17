import React, { useEffect } from "react";

import Nav from "../Nav.jsx";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

		// Form handler for mailto
		const handleSubmit = (e) => {
			e.preventDefault();
			const name = e.target.name.value.trim();
			const email = e.target.email.value.trim();
			const message = e.target.message.value.trim();
			// Simple email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				alert("Please enter a valid email address.");
				return;
			}
			// Compose mailto link
			const mailto = `mailto:${INFO.main.email}?subject=Contact from ${name} (${email})&body=${encodeURIComponent(message)}`;
			window.location.href = mailto;
		};

		return (
			<React.Fragment>
				<div className="page-content">
					<Nav active="contact" />
					<div className="content-wrapper">
						<div className="contact-container">
							<div className="title contact-title">
								Contact me (but like… why?)
							</div>

							<div className="subtitle contact-subtitle">
								If you've made it this far, congrats, you've officially wasted your time. You're either here pretending to enjoy my projects (never happening) or, as I like to say, just wasting your time. You can email me directly at&nbsp;
								<a href={`mailto:${INFO.main.email}`} style={{textDecoration:'none', color:'#696970', cursor:'pointer', fontWeight:'bold'}}>
								{INFO.main.email}
								</a>
								&nbsp;and I might respond before the heat death of the universe or not.
								<br/>
								There's also a contact form. Fill it out, hit submit, and watch your message vanish into the void where all good intentions go to die. But WHY!!!???.
							</div>
						</div>

						<div className="contact-main-flex">
							<div className="socials-container">
								<div className="contact-socials">
									<Socials />
								</div>
							</div>

							<form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
								<div className="contact-form-title">Contact Form</div>
								<div className="contact-form-group">
									<label htmlFor="name">Name</label>
									<input type="text" id="name" name="name" required />
								</div>
								<div className="contact-form-group">
									<label htmlFor="email">Email</label>
									<input type="email" id="email" name="email" required />
								</div>
								<div className="contact-form-group">
									<label htmlFor="message">Message</label>
									<textarea id="message" name="message" required rows={5} />
								</div>
								<div className="contact-form-btn-row">
									<button type="submit" className="contact-form-btn">
										Submit
									</button>
								</div>
							</form>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	};

export default Contact;
