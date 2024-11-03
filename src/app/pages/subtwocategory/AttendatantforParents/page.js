 
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
      <div className="categories">
        <h2 className="sectionTitle">Attendante for Your Parents</h2>
        <div className="categoryRow">
          <div className="categoryItem">
        <Link href="/pages/subCategory/subtwocategory">
            <Image src="/marasImg/helper.jpg" alt="driver" width={80} height={80} />
            <p className='sub-para' >For hospital Visit </p>
        </Link>
          </div>


        
          <div className="categoryItem">
          <Link href="/pages/subCategory/subtwocategory">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Go for Shopping</p>
          </Link>
          </div>
        </div> 



        <div className="categoryRow">
          <div className="categoryItem">
        <Link href="/pages/subCategory/subtwocategory">
            <Image src="/marasImg/helper.jpg" alt="driver" width={80} height={80} />
            <p className='sub-para' >For Bank Passbook Updation </p>
        </Link>
          </div>


        
          <div className="categoryItem">
          <Link href="/pages/subCategory/subtwocategory">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>For Travelling With Parents</p>
          </Link>
          </div>
        </div> 
      </div>
    </div>

       <Footer />
    </div>
    
  );
}
