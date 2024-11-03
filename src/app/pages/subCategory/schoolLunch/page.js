 
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
        <h2 className="sectionTitle">School Lunch For kids</h2>
        <div className="categoryRow">
          <div className="categoryItem">
            <Image src="/category/kidsLunch.jpeg" alt="driver" width={80} height={80} />
            <p className='sub-para' >Big Lunch</p>
          </div>
          <div className="categoryItem">
            <Image src="/category/kidsLunch.jpeg" alt="cabimg" width={80} height={80} />
            <p>Small Lunch</p>
          </div>
        </div> 
      </div>
    </div>

       <Footer />
    </div>
    
  );
}
