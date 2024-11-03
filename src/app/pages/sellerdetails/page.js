// "use client"
// import { useState } from 'react';

// export default function SellerDetails() {
//   const [sellerId, setSellerId] = useState('');
//   const [sellerDetails, setSellerDetails] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`http://localhost:5005/api/seller/${sellerId}`);
//     const data = await response.json();
//     setSellerDetails(data);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6">Get Seller Details</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="sellerId" className="block text-sm font-medium text-gray-700">
//               Seller ID
//             </label>
//             <input
//               type="text"
//               name="sellerId"
//               id="sellerId"
//               value={sellerId}
//               onChange={(e) => setSellerId(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Get Details
//           </button>
//         </form>
//         {sellerDetails && (
//           <div className="mt-6">
//             <h2 className="text-xl font-bold">Seller Details</h2>
//             <p><strong>Name:</strong> {sellerDetails.seller.name}</p>
//             <p><strong>Phone:</strong> {sellerDetails.seller.phone}</p>
//             <h3 className="text-lg font-bold mt-4">Products</h3>
//             {sellerDetails.products.map((product) => (
//               <div key={product._id} className="mt-2">
//                 <p><strong>Product Name:</strong> {product.productName}</p>
//                 <p><strong>Brand:</strong> {product.brand}</p>
//                 <p><strong>MRP:</strong> {product.mrp}</p>
//                 <p><strong>Stock:</strong> {product.stock}</p>
//                 <p><strong>Category:</strong> {product.category}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client"

"use client";
import { useState } from 'react';

export default function SellerDetails() {
  const [sellerId, setSellerId] = useState('');
  const [sellerDetails, setSellerDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5005/api/seller/${sellerId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSellerDetails(data);
    } catch (error) {
      console.error('Error fetching seller details:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Get Seller Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="sellerId" className="block text-sm font-medium text-gray-700">
              Seller ID
            </label>
            <input
              type="text"
              name="sellerId"
              id="sellerId"
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Get Details
          </button>
        </form>
        {sellerDetails && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Seller Details</h2>
            <p><strong>Name:</strong> {sellerDetails.seller.name}</p>
            <p><strong>Phone:</strong> {sellerDetails.seller.phone}</p>
            <h3 className="text-lg font-bold mt-4">Products</h3>
            {sellerDetails.products.length > 0 ? (
              sellerDetails.products.map((product) => (
                <div key={product._id} className="mt-2">
                  <p><strong>Product Name:</strong> {product.productName}</p>
                  <p><strong>Brand:</strong> {product.brand}</p>
                  <p><strong>MRP:</strong> {product.mrp}</p>
                  <p><strong>Stock:</strong> {product.stock}</p>
                  <p><strong>Category:</strong> {product.category}</p>
                </div>
              ))
            ) : (
              <p>No products found for this seller.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
