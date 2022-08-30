import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (<>
    <header id={styles.header}>
      <h1>Bring your Minecraft builds to the <span className="brown">next level</span></h1>
      <h2>Plus, learn architecture, design, color theory, engineering and more by building in Minecraft</h2>
      <Link href="#"><button className="btn-primary brown" disabled>Let me know when it comes out!</button></Link>
      <img src="/media/dashboard.svg"/>
    </header>
    <main id={styles.main}>
      <section id={styles.info}>
        <div>
          <h2>Coming Soon To A Website Near You</h2>
          <p>Beyond Blocks will be the only Minecraft Building course you&apos;ll need to become a master builder. Put together by some of the top Minecraft Creators, Beyond Blocks is perfect for you!</p>
          <Link href="join"><button className="btn-primary green" disabled>Create an account & try the course for free!</button></Link>
        </div>
        <div id={styles.featuring}>
          <h3>Featuring</h3>
          <div>
            <img src="//unsplash.it/100?random=1"/>
            <h4>@mustbeminecraft</h4>
          </div>
          <div>
            <img src="//unsplash.it/100?random=2"/>
            <h4>@mustbeminecraft</h4>
          </div>
          <div>
            <img src="//unsplash.it/100?random=3"/>
            <h4>@mustbeminecraft</h4>
          </div>
        </div>
      </section>
    </main>
  </>)
}