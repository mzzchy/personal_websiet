import React from 'react';
import Data from 'data/zizengmeng.json'


function Intro() {
	let name = Data["name"];
	let jobTitle = Data["job_title"]
	let profile = Data["profile"];


    return (
        <div class="intro">
		    <div class="container text-center">
			    <img class="profile-image" src={require("images/profile-image.png")} alt="" />
				<h1 class="name">{name}</h1>
				<div class="title">{jobTitle}</div>
			    <div class="profile">
				<p>{profile}</p>
			    </div>
            </div>
		</div>
        );
}

export default Intro;