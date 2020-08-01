import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

// IMPORT CURRENT DATE OBJECT FROM CONFIG FILE
import {CURRENT_YEAR} from '../../config' ;

// IMPORT IMAGES
import Logo  from '../../images/nba_logo.png';

const Footer = () =>( 
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
            <img alt="nba logo" src={Logo}/>
            </Link>
            <div className={styles.right}>
            @NBA {CURRENT_YEAR} All rights reserved.
            </div>
        </div>
     )
 
export default Footer;