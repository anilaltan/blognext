import styles from "../styles/Footer.module.css";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.body}>
                <h3>Statically Generated with Next.js</h3>
                <a href="https://github.com/anilaltan/blognext">View on GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;