import React from 'react';
import Data from 'data/zizengmeng.json'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';

var email = Data["email"];
var emailHref = "mailto:" + email;
var phone = Data["phone"];
var phone_str = '(' + phone.substring(0,3) + ') ' + phone.substring(3,6) + '-' + phone.substring(6,10);
var website = Data["website"];

function Contact_info() {
    return(
        <div id="top-contact-info" class="contact-info">
			<ul class="list-inline">
				<li class="email"><EmailIcon/><a href={emailHref}>{email}</a></li>
				<li class="phone"><PhoneIcon/><a href={"tel:" + phone}>{phone_str}</a></li>
				<li class="website"><PublicIcon/><a href={website}>{website}</a></li>
			</ul>
	    </div>
    );
}

export default Contact_info;