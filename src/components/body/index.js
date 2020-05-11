import React from 'react';
import Experience from './experience'
import Education from './education';
import Skill from './skill';
import Projects from './project';
import Contact from './contact';

function Body(){
    return (
        <div class="wrapper container">
            <Experience/>
            <Education/>
            <Skill/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Body;