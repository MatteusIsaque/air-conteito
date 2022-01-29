import Head from 'next/head'

import styles from './../styles/global/menu.module.scss'

import Designer from '../components/home/Designer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Inicio - Conteitu Air</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Designer />
    </main>
  )
}

