import React from "react";
import Link from "next/link";
import styles from "../styles/Posts.module.css";

const Post = ({ post }) => {
    return(
        <div className={styles.card}>
            <div className={styles.container}>
                <h3>22/05/2022</h3>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link href={`/posts/${post.id}`}>
                    <a className={styles.btn_primary}>Read More</a>
                </Link>
            </div>
        </div>
    );
};

export default Post