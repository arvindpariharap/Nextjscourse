import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import { useState } from 'react'
import * as fs from 'fs';

const Blog = (props: { allBlogs: any; }) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  return <div className={styles.container}>
    <main className={styles.main}>
    {blogs.map((blogitem: { slug: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; content: string; })=>{
      return <div key={blogitem.slug}>
      <Link href={`/blogpost/${blogitem.slug}`}>
      <h3 className='blogItemh3'>{blogitem.title}</h3></Link>
      <p className={styles.blogItemp}>{blogitem.metadesc.substr(0,140)}</p>
      </div>
    })}
    </main>
  </div>
  
}
export async function getStaticProps(context: any) {
  let data = await fs.promises.readdir("blogdata")
  let myfile;
  let allBlogs = [];
  for(let index=0; index < data.length; index++){
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogdata/' + item),'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}
export default Blog
