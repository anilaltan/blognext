import React from "react";
import Post from "./Post";
import Grid from "./Grid";
import styles from "../styles/PostList.module.css";

const PostList = ({ posts }) => {
    return(
        <>
            <Grid>
                {posts.data.map((post, index) => {
                    return(
                        <li key={post.id} className={styles.li}>
                            <Post post={post} />
                        </li>
                    )
                    
                })}
            </Grid>
            
        </>

    );
};

export default PostList;