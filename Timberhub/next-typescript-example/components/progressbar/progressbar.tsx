import styles from "./progressbar.module.scss";

export interface ProgressBarProps{
    maxWidth?:number;
    completed:number;
    color?:string;
};
export function  ProgressBar(props: ProgressBarProps){
    return(
        <div className={styles.progressContainer} style={{height:"6px",width:'100%', minWidth:'252px'}}>
            <div className={styles.progressContainer_completed} style={{ height:'6px',width:props.completed+'%' , backgroundColor:props.color}}>
            </div>
        </div>
    );

};