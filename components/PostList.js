import React from "react";
import Post from "./Post";
import Grid from "./Grid";
import styles from "../styles/PostList.module.css";

const PostList = ({ posts }) => {
    return(
        <>
            <Grid>
                {posts.data.map(post => (
                    <div key={post.id}>
                        <Post key={post.id} post={post} />
                    </div>
                    ))}
            </Grid>
            
        </>

    );
};

export default PostList;