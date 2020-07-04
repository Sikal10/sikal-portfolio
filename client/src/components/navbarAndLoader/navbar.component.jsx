import React from "react";
import {Link} from "react-router-dom";

import {ReactComponent as TwitterIcon} from "../../assets/images/twitter.svg";
import {ReactComponent as LinkedIn} from "../../assets/images/linkedin.svg";
import {ReactComponent as Github} from "../../assets/images/github.svg";
import {ReactComponent as Codepen} from "../../assets/images/codepen.svg";
import {ReactComponent as Home} from "../../assets/images/home.svg";
import {ReactComponent as About} from "../../assets/images/person-white-48dp.svg";
import {ReactComponent as Skills} from "../../assets/images/engineering-white-48dp.svg";


import {ReactComponent as Works} from "../../assets/images/folder_open-white-48dp.svg";
import {ReactComponent as Contact} from "../../assets/images/mail_outline-white-48dp.svg";

import './navbarAndLoader.styles.scss';

const NavBar = ({navTopRef, navBotRef, navTopIcons, navBotIcons}) => {
    return (
     <>
        <nav className={'nav-top dark'} ref={navTopRef}>
            <div className={'nav-wrapper top'} ref={navTopIcons}>
                <a rel={'noopener noreferrer'} target={'_blank'} className={'nav-icon twitter'} href={'https://www.twitter.com/sikal_sikal'}>
                    <TwitterIcon/>
                </a>
                <a target={"_blank"} rel={'noopener noreferrer'} className={'nav-icon linkedIn'} href={'https://www.linkedin.com/in/sikal_sikal'}>
                    <LinkedIn/>
                </a>
                <a target={"_blank"} rel={'noopener noreferrer'} className={'nav-icon github'} href={'https://www.github.com/sikal10'}>
                <Github/>
                </a>
                <a target={"_blank"} rel={'noopener noreferrer'} className={'nav-icon codepen'} href={'https://www.codesandbox.io/u/sikal_sikal'}>
                <Codepen/>
                </a>
            </div>
        </nav>
         <nav className={'nav-bottom dark'} ref={navBotRef} onKeyUp={document.activeElement.blur()}>
             <div className={'nav-wrapper bot'} ref={navBotIcons}>
                 <Link className={'nav-icon home'}  to={'/'}>
                    <div className={'hover-text'}>Home</div>
                    <Home/>
                 </Link>
                 <Link to={'/about'} className={'nav-icon about'}>
                    <div className={'hover-text'}>About</div>
                    <About/>
                 </Link>
                 <Link to={'/skills'} className={'nav-icon skills'}>
                    <div className={'hover-text'}>Skills</div>
                    <Skills/>
                 </Link>
                 <Link to={'/works'} className={'nav-icon work'}>
                    <div className={'hover-text'}>Works</div>
                    <Works/>
                 </Link>
                 <Link to={'/contact'} className={'nav-icon contact'}>
                     <div className={'hover-text'}>Contact</div>
                     <Contact/>
                 </Link>
             </div>
         </nav>
      </>
    )
};

export default NavBar;