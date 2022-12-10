import React from 'react';
import styles from "./cells.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Projects } from '../../model/projects';
import { Person } from '../../model/person';
import { ProgressBar } from '../progressbar/progressbar';
function findDis(date:Date){
    var now = new Date();
    return (date.getDate() - now.getDate());
}
const ProjectName = (props: Projects) => (
    	<div className={styles.projcell}>
            <img src={props.img} />
            <div className={styles.projcell_text}>
                <div className={styles.projcell_text_projName}>{props.title}</div>
                <div className={styles.projcell_text_companyName}>{props.hasCompany.name}</div>
            </div>
    	</div>
    );

    const CreatedBy = (props: Projects) => (
    	<div className={styles.projcell}>
            <img src={props.creator.img} />
            <div className={styles.projcell_text}>
                <div className={styles.projcell_text_projName}>{props.creator.name}</div>
                <div className={styles.projcell_text_companyName}>{props.creator.occupation}</div>
            </div>
    	</div>
    );
    const ProgressCell = (props: Projects) =>(
        <div className={styles.projcellProgressBar}>
           <ProgressBar color="#49C96D" maxWidth={100} completed={props.progress}/>
            <div className={styles.projcellProgressBar_percentage}>
                {props.progress} %
            </div>
        </div>
    );

    const DeadlineCell = (props: Projects) =>(
        <div className={styles.projcellDeadline}>
        {findDis(props.deadline) < 7 ? ( <div className={styles.chipOrange}>
                <div className={styles.chipOrange_clock}>
                    <AccessTimeIcon sx={{color:'#E56E19'}}/>
                </div>
                    {findDis(props.deadline) > 1 ? (<div>{findDis(props.deadline)} days left</div>):(<div>{findDis(props.deadline)} day left</div>)}
            </div>
            ):(
            <div className={styles.chipGrey}>
                <div className={styles.chipGrey_clock}>
                    <AccessTimeIcon sx={{color:'#3F434A'}}/>
                </div>
                {findDis(props.deadline)/7 > 1 ? (<div> {findDis(props.deadline)/7} weeks left</div>):(<div> {findDis(props.deadline)/7} week left</div>)}
            </div>)}
        </div>
    );

    export {ProjectName ,CreatedBy, ProgressCell, DeadlineCell};