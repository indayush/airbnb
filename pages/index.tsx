import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const Home: NextPage = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Demo Text</h1> */}

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img} distance={item.distance} location={item.location}
              />
            ))}
          </div>


          {/* Pull data from server */}
        </section>

        <section >
          <h2 className='text-4xl font-semibold pb-5  mt-3'>
            Live Anywhere
          </h2>

          <div className='flex space-x-3 overflow-scroll scroll scrollbar-hide p-3'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText={"Get Inspired"}
          />
        </section>

      </main>

      <Footer />

      {/* Footer */}
    </div >
  )
}

export async function getStaticProps() {

  const exploreData = await fetch('https://links.papareact.com/pyp').
    then((res) => res.json())

  const cardsData = await fetch('https://links.papareact.com/zp1').
    then((res) => res.json())



  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}


export default Home
