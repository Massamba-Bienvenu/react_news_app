import React from 'react';
import style from './header.module.css';
import {Link} from 'react-router-dom';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from '@fortawesome/free-solid-svg-icons';

import SideNav from './SideNav/sideNav'

// IMPORT IMAGES
import Logo  from '../../images/nba_logo.png';


const Header = (props) => {

    const navBars = () => (
        <div className={style.bars}>
                <FontAwesomeIcon icon={faBars}
                onClick={props.onOpenNav}
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }} />
            </div>
    )   
    const logo = () => (
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src={Logo}/>
        </Link>
    )
 
    return ( 
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
     );
}
 
export default Header;