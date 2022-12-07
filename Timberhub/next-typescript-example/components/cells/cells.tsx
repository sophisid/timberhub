import React from 'react';
import { Company } from '../../model/company';
import { CProgressBar } from '@coreui/react';
import { CProgress } from '@coreui/react';
import styles from "./cells.module.scss";

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
    	<div>
            {props.img}
    		{props.companyName}
            {props.projName}
    	</div>
    );

    const CreatedBy = (props: PersonCellProps) => (
    	<div>
    		{props.img}
    		{props.personName}
            {props.coccupation}
    	</div>
    );
    const ProgressCell = (progress:number) =>{
        <CProgress className="mb-3">
            <CProgressBar color="success" value={progress}/>
        </CProgress>
    }

    const DeadlineCell = (left:number, type:string) =>{
        <div className={styles.chip}>
            <div>
                {/* clock icon */}
            </div>
            <div>
                {left} {type} left
            </div>
        </div>
    }

    export {ProjectName ,CreatedBy, ProgressCell, DeadlineCell};