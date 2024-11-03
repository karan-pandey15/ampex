 
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
        <h2 className="sectionTitle">Healthy Food</h2>
        <div className="categoryRow">
          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/sprouts.jpeg" alt="cabimg" width={80} height={80} />
            <p>Sprouts</p>
          </Link>
          </div>



          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/boiledEgg.jpeg" alt="cabimg" width={80} height={80} />
            <p>Boiled egg</p>
          </Link>
          </div>


          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/mixFruit.jpeg" alt="cabimg" width={80} height={80} />
            <p>Mix Fruit chat Pack</p>
          </Link>
          </div>




          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/chach.jpeg" alt="cabimg" width={80} height={80} />
            <p>Chach</p>
          </Link>
          </div>
          



          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/category/misPeanut.jpeg" alt="cabimg" width={80} height={80} />
            <p>Mix Peanut Masala Pack</p>
          </Link>
          </div>
          
 

        </div>   
      </div> 
    </div>

       <Footer />
    </div>
    
  );
}
