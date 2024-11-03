 
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
        <h2 className="sectionTitle">Guardian For Kids</h2>
        <div className="categoryRow">
          <div className="categoryItem">
        <Link href="/pages/UserDashboard">
            <Image src="/marasImg/helper.jpg" alt="driver" width={80} height={80} />
            <p className='sub-para' >Dropping School, Tution </p>
        </Link>
          </div>


        
          <div className="categoryItem">
          <Link href="/pages/UserDashboard">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Go for Shopping,Market</p>
          </Link>
          </div>
        </div> 



        <div className="categoryRow">
          <div className="categoryItem">
        <Link href="/pages/subCategory">
            <Image src="/marasImg/helper.jpg" alt="driver" width={80} height={80} />
            <p className='sub-para' >Travelling with Kids </p>
        </Link>
          </div>


        
          <div className="categoryItem">
          <Link href="/pages/subCategory/subtwocategory">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>For kids,Job</p>
          </Link>
          </div>


          
        
          <div className="categoryItem">
          <Link href="/pages/subCategory/subtwocategory">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Baby Sitter</p>
          </Link>
          </div>
        </div> 
      </div> 
    </div>

       <Footer />
    </div>
    
  );
}
