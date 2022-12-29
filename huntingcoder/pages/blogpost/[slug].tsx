import React, {useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';
import { promises } from 'stream';

const Slug = (props: { myBlog: any; }) => {
  function createMarkup(c: any) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.myBlog);
  return <div className={styles.container}>
  <main className={styles.main}>
    <h1 className={styles.blogh1}>{blog && blog.title}</h1>
    <hr/>
    {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </main>
    </div>;
};

export async function getStaticPaths() {
// let allb = await fs.promises.readdir(`blogdata`)
// allb = allb.map((item) =>{
// return { params: {slug: item.split(".")[0]}}
// console.log(allb)
// })
  return {
    paths: //allb,
    [
      { params: {slug: "how-to-learn-flask"} },
      { params: {slug: "how-to-learn-javascript"} },
      { params: {slug: "how-to-learn-nextjs"} },
      
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: { params: { slug: any; }; }) {
  const {slug} = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

  return {
    props: {myBlog:JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}
export default Slug
