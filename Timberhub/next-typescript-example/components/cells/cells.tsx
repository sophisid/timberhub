import React from 'react';
import { Company } from '../../model/company';
import { CProgressBar } from '@coreui/react';
import { CProgress } from '@coreui/react';
import styles from "./cells.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export interface ProjectNameProps {
   projName:string,
   companyName:string,
   img:string,
  }

  export interface PersonCellProps {
    personName:string,
    coccupation:string,
    img:string,
   }

const ProjectName = (props: ProjectNameProps) => (
    	<div className={styles.projcell}>
            <img src={props.img} />
            <div className={styles.projcell_text}>
                <div className={styles.projcell_text_projName}>{props.projName}</div>
                <div className={styles.projcell_text_companyName}>{props.companyName}</div>
            </div>
    	</div>
    );

    const CreatedBy = (props: PersonCellProps) => (
    	<div className={styles.projcell}>
            <img src={props.img} />
            <div className={styles.projcell_text}>
                <div className={styles.projcell_text_projNamevc}>{props.personName}</div>
                <div className={styles.projcell_text_companyName}>{props.coccupation}</div>
            </div>
    	</div>
    );
    const ProgressCell = (progress:number) =>{
        <div>
            <CProgress className="mb-3">
                <CProgressBar color="success" value={progress}/>
            </CProgress>
        <div>
            {progress} %
        </div>
        </div>
    }

    const DeadlineCell = (left:number, type:string) =>{
       {type === "days" ? ( <div className={styles.chipOrange}>
            <div className={styles.chipOrange_clock}>
                <AccessTimeIcon sx={{color:'#E56E19'}}/>
            </div>
            <div className={styles.chipOrange_text}>
                {left} {type} left
            </div>
        </div>
        ):(
        <div className={styles.chipGrey}>
            <div className={styles.chipGrey_clock}>
                <AccessTimeIcon sx={{color:'#3F434A'}}/>
            </div>
            <div className={styles.chipGrey_text}>
                {left} {type} left
            </div>
        </div>)}
    }

    export {ProjectName ,CreatedBy, ProgressCell, DeadlineCell};