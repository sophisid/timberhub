import Link from "next/link";
import * as React from "react";
import dynamic from "next/dynamic";


import {
  ButtonLarge,
  ButtonLargeOutlined,
} from "../components/buttons/buttons";
import styles from "./index.module.scss";

export default function Home() {
  /**
   * Banner messages
   */
  const msg = {
    small: "We expertise in",
    big_primary: "Welcome to my TimberHub code Assesment",
    link:<a href="https://www.figma.com/file/54Fn4qeV1U9pZ5njjv1NO6/Front-End-Exercise-%7C-Sophia-Sideris?node-id=0%3A1">here</a>,
    description:
      <div>My task is to create one page using Next.js according to the Figma desing provided </div>,
  };

  return (
    <div className={styles.homepage}>
      {/* Banner & clients section */}
      <div className={styles.banner}>
        {/* <div className={styles.banner_small}>{msg.small}</div> */}
        <div className={styles.banner_primary}>{msg.big_primary}</div>
        <div className={styles.banner_description}>{msg.description}<div className={styles.banner_description_link}>{msg.link}</div> </div> 
        <div className={styles.actions}>
          <Link href="/projects">
            <div className={styles.actions_action}>
              <ButtonLarge
                text="PROJECTS"
                backgroundColor={styles.colorPrimaryMain}
                myClassName={[styles.btn_float]}
              />
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.actions_action_special}>
              <ButtonLargeOutlined
                text="READ ME"
                color={styles.colorPrimaryMain}
                backgroundColor={styles.colorPrimaryMain}
                myClassName={[styles.btn_float]}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
