import React from 'react'; 
import Data from 'data/zizengmeng.json'
import DownloadIcon from '@material-ui/icons/GetApp';
import HireMeIcon from '@material-ui/icons/Send';



function Action() {
	let email = Data["email"];
	let emailHref = "mailto:" + email;
	let resume_name = Data["resume"];
	
    return (
    <div class="top-bar container-fluid">
		<div class="actions">
			<a class="actionBtn" href={emailHref}><HireMeIcon/> Hire Me</a>
			<a class="actionBtn" href={process.env.PUBLIC_URL + resume_name} download>
				<DownloadIcon/> Download My Resume</a>
		</div>
	</div>
        );
}

export default Action;