'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice'; 
import { toast } from 'react-toastify';
import TopNavbar from '@/app/components/topnavbar/page';
import Footer from '@/app/components/footer/page';

// Update this URL to your actual backend API endpoint
const ProductsApi = "https://api.marasimpex.com/api/products";

export default function Grocerydisplay() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const dispatch = useDispatch(); // Redux dispatch

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${ProductsApi}?category=GROCERY`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search keywords
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchItem, products]);

  const handleAddToWishlist = (product) => {
    dispatch(add({ ...product, quantity: 1 }));
    toast('Added to Wishlist', {
      position: "bottom-center",
      autoClose: 1000, // 1 second
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      style: {
        backgroundColor: '#964B00',
        color: 'white',
        fontWeight: 'bold',
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="search"
            placeholder="Search Products..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <div className="divide-y divide-gray-300"> {/* Add divider between products */}
          {filteredProducts.map((product) => (
            <div 
              key={product._id} 
              className="flex items-center justify-between py-4"
            >
              <Link href={`/components/product/${product._id}`}>
                <div className="flex items-center">
                  {product.images && product.images.length > 0 && (
                    <Image
                      className="w-16 h-16 object-contain mr-4"
                      src={product.images[0]}
                      alt={product.name}
                      width={64}
                      height={64}
                    />
                  )}
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                </div>
              </Link>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-bold text-gray-800">₹{product.price}</p> {/* Bold the price */}
                <button 
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200" 
                  onClick={() => handleAddToWishlist(product)}
                >
                  + Add
                </button>     
              </div>
            </div>
          ))}
        </div>
      </div> 
      <Footer />
    </div>
  );
}
