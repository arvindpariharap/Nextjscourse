import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
        h2{
          font-size:38px;
        }
        h3{
          font-size:28px;
        }
        `}
      </style>
      <Head>
        <title>hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
        <h1 className={styles.title}>Hunting Coder</h1>
        <div className={styles.Imagerape}>
        {/* <Image className={styles.myimg} src="/homeimg.avif" width={237} height={158} alt={'hunting coder'}/> */}
        <img className={styles.myimg} src="/homeimg.avif" width={237} height={158} alt="hunting coder"/>
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder.
        </p>
        </div>
        <div className="blogs">
          <h2>Latests Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>JavaScript is the language use to design for web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>JavaScript is the language use to design for web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>JavaScript is the language use to design for web</p>
          </div>
        </div>
      </main>
      <div className={styles.footer}>

      </div>
      </div>
  )
}
