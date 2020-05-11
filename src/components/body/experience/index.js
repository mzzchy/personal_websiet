import React from 'react';
import Data from 'data/zizengmeng.json'
import LocationOnIcon from '@material-ui/icons/LocationOn';

var experiences = Data["experiences"];


function Item(props) {
	let detail = props.detail;
	let projects = detail["projects"];
	let company = detail["company"];
	let location = detail["location"];
	let title = detail["title"];
	let time = detail["time"];
	let description = detail["description"];

	return (
	<div class="item">
		<div class="work-place">
			<h3 class="place">{company}</h3>
			<div class="location"><LocationOnIcon/>{location}</div>
		</div>
		<div class="job-meta">
			<div class="title">{title}</div>
			<div class="time">{time}</div>
		</div>
		<div class="job-desc">
			<p>{description}</p> 
			<ul>
                {projects.map(function(project, index){
                    return <li key={ index }>{project}</li>;
                  })}
            </ul>
		</div>
	</div>
	)
}

function Experience(){
		
		return (
			<section id="experiences-section" class="experiences-section section">
				<h2 class="section-title">Work Experiences</h2>
				<div class="timeline">
					{experiences.map(function(experience, index){
                    return <Item key={index} detail={experience}/>;
                  })}
				</div>
			</section>
			);

}

export default Experience;