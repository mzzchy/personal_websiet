import React from 'react';
import Action from './action/index'
import Intro from './intro/index'
import Page_nav from './page_nav/index'
import Contact_info from './contact_info';

function Header() {
    return (
        <header class="header">
            <Action/>
            <Intro/>
            <Contact_info/>
            <Page_nav/>
        </header>
    );
}

export default Header;