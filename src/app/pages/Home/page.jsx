 

// "use client"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     panNumber: '',
//     aadharNumber: '',
//     accountNumber: '',
//     pin: '',
//     permanentAddress: '',
//     qualification: '',
//     category: 'House Keeping',
//     hours: '1Hour'
//   });

//   const [degreeFile, setDegreeFile] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (name === 'degreeFile') {
//       setDegreeFile(files[0]);
//     } else if (name === 'imageFile') {
//       const reader = new FileReader();
//       reader.onload = () => {
//         localStorage.setItem('imageFile', reader.result);
//       };
//       reader.readAsDataURL(files[0]);
//       setImageFile(files[0]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Store form data in localStorage
//     localStorage.setItem('formData', JSON.stringify(formData));
//     if (degreeFile) {
//       localStorage.setItem('degreeFile', degreeFile.name);
//     }
    
//     // Redirect to result page
//     alert("Data sent to database");
//     router.push('/pages/result');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-gray-900">User Information Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//                 Phone
//               </label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="text"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
//                 Address
//               </label>
//               <input
//                 id="address"
//                 name="address"
//                 type="text"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="panNumber">
//                 PAN Number
//               </label>
//               <input
//                 id="panNumber"
//                 name="panNumber"
//                 type="text"
//                 value={formData.panNumber}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharNumber">
//                 Aadhar Number
//               </label>
//               <input
//                 id="aadharNumber"
//                 name="aadharNumber"
//                 type="text"
//                 value={formData.aadharNumber}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountNumber">
//                 Account Number
//               </label>
//               <input
//                 id="accountNumber"
//                 name="accountNumber"
//                 type="text"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
//                 PIN
//               </label>
//               <input
//                 id="pin"
//                 name="pin"
//                 type="text"
//                 value={formData.pin}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="permanentAddress">
//               Permanent Address
//             </label>
//             <input
//               id="permanentAddress"
//               name="permanentAddress"
//               type="text"
//               value={formData.permanentAddress}
//               onChange={handleChange}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
//               Qualification
//             </label>
//             <input
//               id="qualification"
//               name="qualification"
//               type="text"
//               value={formData.qualification}
//               onChange={handleChange}
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
//               Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//             >
//               <option>House Keeping</option>
//               <option>Service</option>
//               <option>Walk Men</option>
//               <option>Assistant</option>
//               <option>Helper</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hours">
//               Hours
//             </label>
//             <select
//               id="hours"
//               name="hours"
//               value={formData.hours}
//               onChange={handleChange}
//               className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//             >
//               <option>1Hour</option>
//               <option>2 to 3 Hours</option>
//               <option>3 to 6 Hours</option>
//               <option>Full Day</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degreeFile">
//               Upload Degree (PDF)
//             </label>
//             <input
//               id="degreeFile"
//               name="degreeFile"
//               type="file"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageFile">
//               Upload Image
//             </label>
//             <input
//               id="imageFile"
//               name="imageFile"
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopNavbar from '@/app/components/topnavbar/page';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    panNumber: '',
    aadharNumber: '',
    accountNumber: '',
    pin: '',
    permanentAddress: '',
    qualification: '',
    category: 'House Keeping',
    hours: '1Hour',
    degree: null,
    image: null
  });
 
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'degree' || name === 'image') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Store image as a Base64 string
    if (formData.image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem('image', reader.result);
        completeFormSubmission();
      };
      reader.readAsDataURL(formData.image);
    } else {
      completeFormSubmission();
    }
  };

  const completeFormSubmission = () => {
    // Store form data in localStorage
    localStorage.setItem('formData', JSON.stringify({ ...formData, image: null }));
    
    // Redirect to result page
    router.push('/pages/result');
  };

  return (
  <>
  <TopNavbar />
    <div style={{marginTop:50}} className="min-h-screen flex items-center justify-center    ">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Attended Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['name', 'phone', 'email', 'address', 'panNumber', 'aadharNumber', 'accountNumber', 'pin', 'permanentAddress', 'qualification'].map((key) => (
              <div key={key}>
                <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor={key}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  id={key}
                  name={key}
                  type="text"
                  value={formData[key]}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>House Keeping</option>
                <option>Service</option>
                <option>Walk Men</option>
                <option>Assistant</option>
                <option>Helper</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hours">
              Availability in Hours
              </label>
              <select
                id="hours"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>1Hour</option>
                <option>2 to 3 Hours</option>
                <option>3 to 6 Hours</option>
                <option>Full Day</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
                Upload Degree (PDF)
              </label>
              <input
                id="degree"
                name="degree"
                type="file"
                accept="application/pdf"
                onChange={handleChange}
                className="block w-full text-gray-700"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Upload Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="block w-full text-gray-700"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  );
}
