import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
    return(
        <div className={styles.nav}>
            <h2><Link href="/">Blog</Link></h2>
            <p className={styles.logo}>A statically generated blog example using <a href="https://nextjs.org/">Next.js</a> and <a href="https://strapi.io/">Strapi</a>.</p>   
        </div>
    );
};

export default Nav;