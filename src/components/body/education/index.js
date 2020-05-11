import React from 'react';
import Data from 'data/zizengmeng.json'


let educations = Data["educations"];


function Degree(props){
	let education = props.education;
	let degree = education["degree"];
	let name = education["name"];
	let time = education["time"];
	let description = education["description"];

	return (
		<div class="item col-xs-12 col-sm-4">
				<div class="item-inner">
					<h3 class="degree">{degree}</h3>
					<div class="education-body">
						{name}
					</div>
					<div class="time">{time}</div>
					<div class="desc">
						{description}
					</div>
				</div>
		</div>
	);
}

function Education() {
    return (
        <section id="eudcation-section" class="education-section section">
		<h2 class="section-title">Education</h2>
		<div class="row">
			{educations.map(function(education, index){
                return <Degree key={index} education={education}/>;
            })}
		</div>
	</section>
    );
}

export default Education;