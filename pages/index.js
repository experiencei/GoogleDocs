import Head from 'next/head'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google Docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <Header/>
          <section>
            <div className="max-w-3xl mx-auto">

            </div>
          </section>
    </div>
  )
}
