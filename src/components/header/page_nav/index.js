import React from 'react';


class Page_nav extends React.Component {

	constructor(props){
		super(props);

		window.onscroll = () => {

				let scrollTop = document.getElementById('top-contact-info').getBoundingClientRect().top;
				
				if (scrollTop > 0) {
			
					document.getElementById('page-nav-wrapper').className="page-nav-wrapper";
	
				 }
				 else {
				
					document.getElementById('page-nav-wrapper').className="page-nav-wrapper fixed";
		
				 }
		}

	}

	render(){
		return (
			<div id="page-nav-wrapper" class="page-nav-wrapper">
					<ul id="page-nav" class="nav page-nav list-inline">
						<li><a class="scrollto" href="#experiences-section">Experiences</a></li>
						<li><a class="scrollto" href="#eudcation-section">Education</a></li>
						<li><a class="scrollto" href="#skills-section">Skills</a></li>
						<li><a class="scrollto" href="#portfolio-section">Portfolio</a></li>
						<li><a class="scrollto" href="#contact-section">Contact</a></li>
					</ul>
			</div>
		);
	}
}

export default Page_nav;