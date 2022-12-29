import React, { useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState } from "react";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props: { allBlogs: any }) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(5);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 5}`);
    setCount(count + 5);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map(
            (blogitem: {
              slug: React.Key | null | undefined;
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              content: string;
            }) => {
              return (
                <div key={blogitem.slug}>
                  <Link href={`/blogpost/${blogitem.slug}`}>
                    <h3 className="blogItemh3">{blogitem.title}</h3>
                  </Link>
                  <p className={styles.blogItemp}>
                    {blogitem.metadesc.substr(0, 140)}
                  </p>
                  <Link href={`/blogpost/${blogitem.slug}`}>
                    <button className={styles.blogbtn}>Read More</button>
                  </Link>
                </div>
              );
            }
          )}
        </InfiniteScroll>
      </main>
    </div>
  );
};
export async function getStaticProps(context: any) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 5; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}
export default Blog;
