 
import Image from 'next/image';
import './style.css';
import TopNavbar from '@/app/components/topnavbar/page';
import Footer from '@/app/components/footer/page';
import Link from "next/link"
export default function Cab() {
  return (
    <div>
        <TopNavbar />
    <div className="container">
      

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for 'Attendate'"
          className="searchInput"
        />
      </div>

      <div className="categories">
        <h2 className="sectionTitle">Book a Attendate</h2>
        <div className="categoryRow">
          <div className="categoryItem">
        <Link href="/pages/bookingscreen/attendedScreen">
            <Image src="/marasImg/helper.jpg" alt="driver" width={80} height={80} />
            <p className='sub-para' >Guardian For Kids </p>
        </Link>
          </div>


        
          <div className="categoryItem">
          <Link href="/pages/UserDashboard">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Attendante for Your Parents</p>
          </Link>
          </div>
        </div> 
      </div>
    </div>

       <Footer />
    </div>
    
  );
}
