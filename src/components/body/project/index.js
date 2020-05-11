import React from 'react';
import Data from 'data/zizengmeng.json'



let projects = Data["projects"];

function Project(props){
	let project = props.project;
	let title = project["title"];
	let tech = project["tech"];
	let image = project["image"];
	let category = project["category"];
	let link = project["link"];

	if(props.selected !== "both" && category !== "both" && category !== props.selected) {
		return null;
	};

	return (
		<div class={"item " + category + " col-md-3 col-xs-6 "}>
			<div class="item-inner">
				<figure class="figure">
					<img class="img-responsive" src={ require('images/portfolio/'+ image)} alt=""/>
				</figure>
				<div class="content text-left">
					<h3 class="sub-title"><a href="#">{title}</a></h3>
					<div class="meta">{tech}</div>
					<div class="action"><a href={link}>View on Github</a></div>
				</div>
				<a class="link-mask" href="#"></a>              
			</div>
		</div>
	);
}

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: "both"
		}
		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(cate,id) {
		this.setState({selected:cate});

		document.getElementById("all").setAttribute("class", "type");  
		document.getElementById("backend").setAttribute("class", "type");  
		document.getElementById("frontend").setAttribute("class", "type");  

		document.getElementById(id).setAttribute("class", "type active"); 
	}
  
	render() {
		let selected = this.state.selected;
		return (
			<section id="portfolio-section" class="portfolio-section section">
			<h2 class="section-title">Projects</h2>
			<ul id="filters" class="filters clearfix">
				<li id="all" class="type active" onClick={() => this.handleClick("both", "all")}>All</li>
				<li id="backend" class="type" onClick={() => this.handleClick("backend", "backend")}>Back-end</li>
				<li id="frontend" class="type" onClick={() => this.handleClick("frontend", "frontend")}>Front-end</li>
			</ul>
			<div class="items-wrapper isotope row">
				{projects.map(function(project, index){
					return <Project key={index} project={project} selected={selected}/>;
				})}
				
			</div>
			
		</section>
		);
	}
}


export default Projects;