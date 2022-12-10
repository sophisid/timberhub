import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import { Header, HeaderAction } from "../header/header";
import React from 'react'
import Router from 'next/router';

const navActions: Array<HeaderAction> = [
  { name: "Home", link: "/", icon: "home" },
  { name: "Projects", link: "/projects", icon: "projects" },
];
export default function Layout({
  children
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div id="layout-container" className={styles.container}>
      <Head>
        <title>{"Timberhub code assessment"}</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="description" content="Timberhub code" />
        <link rel="stylesheet" href="fonts/Poppins/style.css" />
      </Head>
      <Header logoPath="/images/logo.png" actions={navActions}></Header>
      <main  className={styles.m_b}>{children}</main>
    </div>
  );
}
