import styles from "./buttons.module.scss";

export interface ButtonProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  shadow?: string;
  iconPath?: string;
  myClassName?: Array<string>
}
/**
 * Normal sized button
 */
const Button = (props: ButtonProps) => {
  return (
    <div
      className={styles.btn}
      style={{
        background: props.backgroundColor,
        color: props.color,
        boxShadow: props.shadow,
      }}
    >
      {props.iconPath != undefined && <img src={props.iconPath} />}

      <div className={styles.btn_text}>{props.text}</div>
    </div>
  );
};
/**
 * Normal sized, outlined button
 */
const ButtonOutlined = (props: ButtonProps) => {
  return (
    <div
      className={styles.btn_outlined}
      style={{ borderColor: props.backgroundColor, color: props.color }}
    >
      <div className={styles.fill}>
        <div className={styles.btn_outlined_text}>{props.text}</div>
      </div>
    </div>
  );
};
/**
 * Large sized, outlined button
 */
const ButtonLargeOutlined = (props: ButtonProps) => {
  return (
    <div
      className={styles.btn_outlined_large + " " + [props.myClassName].join(" ")}
      style={{ borderColor: props.backgroundColor, color: props.color }}
    >
      <div className={styles.fill}>
        <div className={styles.btn_outlined_large_text}>{props.text}</div>
      </div>
    </div>
  );
};
/**
 * Normal sized, link button 
 * */
const ButtonLink = (props: ButtonProps) => {
  return (
    <div
      className={styles.btn_link}
      style={{ background: props.backgroundColor, color: props.color }}
    >
      <div className={styles.btn_link_text}>{props.text}</div>
    </div>
  );
};
/**
 * Large button 
 */
const ButtonLarge = (props: ButtonProps) => {
  return (
    <div
      className={styles.btn_large + " " + [props.myClassName].join(" ")}
      style={{ background: props.backgroundColor, color: props.color }}
    >
      <div className={styles.btn_large_text}>{props.text}</div>
    </div>
  );
};

export { Button, ButtonOutlined, ButtonLink, ButtonLarge, ButtonLargeOutlined };
