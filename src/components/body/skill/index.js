import React from 'react';
import Data from 'data/zizengmeng.json'
import Circle from 'react-circle';


let skills = Data["skills"];

function TopSkill(props) {

	let top_skill = props.top_skill;
	let percentage = top_skill["percentage"];
	let skill_name = top_skill["skill_name"];
	let level = top_skill["level"];
	let description = top_skill["description"];

	return (
		<div class="item col-xs-12 col-sm-4">
			<div class="item-inner">
				<Circle progress={percentage}/>
				<h4 class="skill-name">{skill_name}</h4>
				<div class="level">{level}</div>
				<div class="desc">
					{description}
				</div>
			</div>
		</div>

	);
}



function Skill() {

	let top_skills = skills["top_skills"];
	let other_skills = skills["other_skills"];

    return (
        <section id="skills-section" class="skills-section section text-center">
		<h2 class="section-title">Professional Skills</h2>
		<div class="top-skills">
			<h3 class="subtitle">Top Skills</h3>
			<div class="row">
				{top_skills.map(function(top_skill, index){
                	return <TopSkill key={index} top_skill={top_skill}/>;
            	})}
			</div>
		</div>
		
		<div class="other-skills">
			<h3 class="subtitle">Other Skills</h3>
			<div class="misc-skills">
				{other_skills.map(function(other_skill, index){
                	return <span class="skill-tag">{other_skill}</span>;
            	})}	
			</div>
		</div>
		
	</section>
    );
}

export default Skill;