import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Data from 'data/zizengmeng.json'



function Contact() {
	let intro = Data["intro"];
	let contact = intro["contact"];
	let services = intro["services"];
	let dialog = intro["dialog"];
	let email = Data["email"];
	let phone = Data["phone"];

    return (
    	<section id="contact-section" class="contact-section section">
		<h2 class="section-title">Get in Touch</h2>
		<div class="intro">
			<img class="profile-image" src={require("images/profile-image.png")} alt=""/>
			<div class="dialog">
			<p>{dialog}</p>
				<p><strong>I can help with the following:</strong></p>
				<ul class="list-unstyled service-list">
					{services.map(function(service, index){
					return <li key={index}><i class="fa fa-check" aria-hidden="true"></i> {service}</li>;
					})}
				</ul>
				<p>Drop me a line at <a href="mailto:someone@example.com">{email}</a> or call me at <a href={"tel:" + phone}>{phone}</a></p>
				<ul class="social list-inline">
					<li><a href={contact["linkedin"]}><LinkedInIcon /></a></li>
					<li><a href={contact["twitter"]}><TwitterIcon/></a></li>		
					<li><a href={contact["github"]}><GitHubIcon/></a></li>
					<li><a href={contact["facebook"]}><FacebookIcon/></a></li>
				</ul>
			</div>
		</div>

	</section>
    );
}

export default Contact;