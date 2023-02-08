import Image from "next/image"
import { Inter } from '@next/font/google'
import styles from '../page.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>
        Hello! I'm Atharva Pardeshi
      </h1>
      <div className={styles.description}>
        <p style={{ fontSize: '18px' }}>
          I'm a self-taught software developer.
          I'm currently focusing on full-stack web development, but I'm a generalist.
          I enjoy tinkering low level systems while also exploring technology in visual forms.
        </p>
      </div>
      <div className={styles.center}>
        <Image
          src="https://github.com/SazedWorldbringer.png"
          alt="Sazed reading from a metal plate"
          width={400}
          height={400}
          style={{ borderRadius: '12px', boxShadow: '0px 2px 8px -1px #0000001a' }}
          priority
        />
      </div>
      <div className={styles.grid}>
        <Link
          href="https://github.com/SazedWorldbringer"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            GitHub <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Check out my GitHub profile!</p>
        </Link>

        <Link
          href="https://linkedin.com/in/atharvapardeshi"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Linkedin <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Connect with me on Linkedin!
          </p>
        </Link>

        <Link
          href="https://atharvarants.vercel.app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Blog <span>-&gt;</span>
          </h2>
          <p className={inter.className}>I try to write blog posts :P</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
        >
          <h2 className={inter.className}>
            Home <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Go back to the Home page
          </p>
        </Link>
      </div>
    </main>
  )
}
