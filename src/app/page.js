import Head from 'next/head';
import Banner2 from "./components/banner2/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import ShopByCategory from "./components/shopbycategory/page"; 
import TopNavbar from "./components/topnavbar/page"; 
import TabBar from './components/tabbar/page';
import SearchInput from './components/input/page';


export default function Home() {
  return (
    <main>
      <Head>
        <title>Maras: Booking Made Brilliant</title>
        <meta name="description" content="Maras offers seamless hotel bookings and e-commerce services for work and travel needs. Book your stay, find your essentials, and make every trip a success with Maras." />
        <meta name="keywords" content="Maras, hotel booking, e-commerce, travel, work, school, bookings, travel essentials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      
      <header>
        <TopNavbar />
        <Navbar />
      </header>
      <div>
        <SearchInput />
        <TabBar />
      </div>
      
      <section>
        <Banner2 />
      </section>

      <section>
        <ShopByCategory />
      </section>
 
      <div style={{ height: '100px' }}></div>

      <footer>
        <Footer />
      </footer>
    </main>
    
  );
}
