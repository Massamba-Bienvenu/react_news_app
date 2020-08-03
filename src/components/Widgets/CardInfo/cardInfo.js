import React from 'react';
import styles from './cardInfo.module.css';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory} from '@fortawesome/free-solid-svg-icons';

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.id === team 
        });

        if(data){
            return data.name
        }
    }

    return ( 
        <div className={styles.cardNfo}>
            <span className={styles.teamName}>
                {teamName(props.teams, props.team)}
            </span>
            <span className={styles.date}>
                <FontAwesomeIcon icon={faHistory}/>
                {props.date}
            </span>
        </div>
     )
}
 
export default CardInfo;