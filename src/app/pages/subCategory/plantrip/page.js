 
import Image from 'next/image';
import './style.css';
import TopNavbar from '@/app/components/topnavbar/page';
import Footer from '@/app/components/footer/page';

export default function Driver() {
  return (
    <div>
        <TopNavbar />
    <div className="container">
      

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search for 'Healthy foods'"
          className="searchInput"
        />
      </div>

      <div className="categories">
        <h2 className="sectionTitle">Plan a Trip</h2>
        <div className="categoryRow">
          <div className="categoryItem">
            <Image src="/marasImg/hotelimg.png" alt="driver" width={80} height={80} />
            <p className='sub-para' >Hotel Booking</p>
          </div>
          <div className="categoryItem">
            <Image src="/marasImg/cabimg.png" alt="cabimg" width={80} height={80} />
            <p>OutStation Cab</p>
          </div>




          <div className="categoryItem">
            <Image src="/category/homestay.jpeg" alt="driver" width={80} height={80} />
            <p className='sub-para' >Home Stay</p>
          </div>
          <div className="categoryItem">
            <Image src="/category/ticketImg.jpeg" alt="cabimg" width={80} height={80} />
            <p>Ticket Booking</p>
          </div>

          
          <div className="categoryItem">
            <Image src="/category/forex.jpeg" alt="cabimg" width={80} height={80} />
            <p>Forex</p>
          </div>
          
        </div> 
      </div>
    </div>

       <Footer />
    </div>
    
  );
}
