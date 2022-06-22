import Head from 'next/head'
import PostList from '../Components/PostList'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (   
    <div>
      <Head>
        <title>Blog by Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={posts}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/blogs");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};