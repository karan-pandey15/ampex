 
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
        <h2 className="sectionTitle">School Collections</h2>
        <div className="categoryRow">
          <div className="categoryItem">
        <Link href="/pages/subCategory/school">
            <Image src="/category/uniform.jpeg" alt="driver" width={80} height={80} />
            <p className='sub-para' >Uniform </p>
        </Link>
          </div>


        
          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/books.jpeg" alt="cabimg" width={80} height={80} />
            <p>Books</p>
          </Link>
          </div>



          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/bags.jpeg" alt="cabimg" width={80} height={80} />
            <p>Bags</p>
          </Link>
          </div>


          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/kidsLunch.jpeg" alt="cabimg" width={80} height={80} />
            <p>Kids School Lunch</p>
          </Link>
          </div>




          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/cabimg.png" alt="cabimg" width={80} height={80} />
            <p>School Cab</p>
          </Link>
          </div>
          



          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/schoolprj.jpeg" alt="cabimg" width={80} height={80} />
            <p>School Project</p>
          </Link>
          </div>
          


          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/accesssories.jpeg" alt="cabimg" width={80} height={80} />
            <p>Accessories</p>
          </Link>
          </div>

          
          
          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/schoolTeacher.jpeg" alt="cabimg" width={80} height={80} />
            <p>Book a Teacher</p>
          </Link>
          </div>


          
          
          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/coachimg.jpeg" alt="cabimg" width={80} height={80} />
            <p>Book a Coach</p>
          </Link>
          </div>
          

          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/hotdeal.jpeg" alt="cabimg" width={80} height={80} />
            <p>Hot Deals</p>
          </Link>
          </div> 


<div style={{height:"100px",width:'100%'}} ></div>
        </div>   
      </div> 
    </div>

       <Footer />
    </div>
    
  );
}
