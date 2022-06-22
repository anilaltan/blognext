import React from "react";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return(
        <>
            <div className={styles.header}>The source code for this blog is <a href="https://github.com/anilaltan/blognext">available on GitHub</a></div>
            <Nav/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default Layout;