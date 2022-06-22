import React from "react";
import Image from 'next/image';
import styles from "../../styles/id.module.css";

const PostDetails = ({ post }) => {
    return(
        <div className={styles.card}>
            <h1>{post.data.attributes.title}</h1>
            <h5>{post.data.attributes.published}</h5>
            <Image alt="Cover" src={post.data.attributes.coverImage} layout="responsive" width={900} height={400} className={styles.fakeimg}/>
            <p>{post.data.attributes.body}</p>
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:1337/api/blogs/`);
    const posts = await res.json();
    const paths = posts.data.map(post => {
        return{
            params: {id: post.id.toString()},
        };
    });
    return{
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const res = await fetch(`http://localhost:1337/api/blogs/${context.params.id}`);
    const post = await res.json();

    return{
        props: {
            post,
        },
    };
};

export default PostDetails;