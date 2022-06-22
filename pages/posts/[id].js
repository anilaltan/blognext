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
    const res = await fetch(`/api/blogs/`, {headers:{Authorization: `bearer 6c7ca5913ea8b7089b7fa51f8d1cc1a359e5d61da837fa571b76e18dd757bd54c9aebc4f58a0e338d182732ee51439534e8c86cbbd087ecf4542b65229cc58ea8ee12ee9d1ccf59d23e069228754b85ada1f252aadf396b203602bf46249fd71ba0fbf711c1dc4420d305fa22c18f239c44e4541be11163c99210cf600ee2d86`}});
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
    const res = await fetch(`/api/blogs/${context.params.id}`, {headers:{Authorization: `bearer 6c7ca5913ea8b7089b7fa51f8d1cc1a359e5d61da837fa571b76e18dd757bd54c9aebc4f58a0e338d182732ee51439534e8c86cbbd087ecf4542b65229cc58ea8ee12ee9d1ccf59d23e069228754b85ada1f252aadf396b203602bf46249fd71ba0fbf711c1dc4420d305fa22c18f239c44e4541be11163c99210cf600ee2d86`}});
    const post = await res.json();

    return{
        props: {
            post,
        },
    };
};

export default PostDetails;