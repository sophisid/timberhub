import styles from "./index.module.scss";
import MoodIcon from '@mui/icons-material/Mood';

const App: React.FC = () => {
    return (
        <div className={styles.homepage}>
        {/* Banner & clients section */}
        <div className={styles.banner}>
          {/* <div className={styles.banner_small}>{msg.small}</div> */}
          <div className={styles.banner_secondary}>Hello, and thank you for reviewing my TimberHub code Assessment</div>
          <div className={styles.banner_description}>The only thing that I could not  do is the custom pagination.You can navigate through the arrows but  not from the numbering. Also sorting the columns is bugging.</div>
          <div className={styles.banner_description}>Hope you are happy with the results. The table has a min-width : 1350px as the mockpus in order to be same. </div> 
          <MoodIcon />
          </div>
        </div>
    );
  };
  
  export default App;