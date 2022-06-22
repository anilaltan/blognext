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
                        <li key={`${post.id}+${index}`} className={styles.li}>
                            <Post key={post.id} post={post} />
                        </li>
                    )
                    
                })}
            </Grid>
            
        </>

    );
};

export default PostList;