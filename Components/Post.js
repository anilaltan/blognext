import React from "react";
import Link from "next/link";
import styles from "../styles/Posts.module.css";

const Post = ({ post }) => {
    return(
        <div className={styles.card}>
            <div className={styles.container}>
                <h3>{post.attributes.published}</h3>
                <h1>{post.attributes.title}</h1>
                <p>{post.attributes.body}</p>
                <Link href={`/posts/${post.id}`}>
                    <a className={styles.btn_primary}>Read More</a>
                </Link>
            </div>
        </div>
    );
};

export default Post