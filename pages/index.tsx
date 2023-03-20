import type { NextPage } from 'next'
import { TopBar } from '../components/topBar'
import { Navbar } from '../components/navigation';
import { FooterPublic as Footer } from '../components/footer';

const Home: NextPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      Home Page
      <Footer />
    </>

  )
}

export default Home
