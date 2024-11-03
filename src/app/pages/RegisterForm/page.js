
"use client";
import { useState } from 'react';
import axios from 'axios';
import TopNavbar from '@/app/components/topnavbar/page';
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    category: '',
    availability: '',
    qualification: '',
    address: '',
    panNumber: '',
    aadharNumber: '',
    gender: '',
    religion: '',
    city: '',
    state: '',
    pinCode: '',
    maritalStatus: '',
    wifeName: '',
    wifeAadharNumber: '',
    wifePanNumber: '',
    jobStatus: '',
    bankName: '',
    accountNumber: '',
    branch: '',
    ifscCode: '',
    paymentReceiver: '',
    relationBankName: '',
    relationAccountNumber: '',
    relationBranch: '',
    relationIfscCode: '',
    marksheet: null,
    image: null,
    checkBook: null,
    guardianOptions: [],
    customRequirements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleMaritalStatusChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      maritalStatus: value,
      wifeName: value === 'yes' ? prev.wifeName : '',
      wifeAadharNumber: value === 'yes' ? prev.wifeAadharNumber : '',
      wifePanNumber: value === 'yes' ? prev.wifePanNumber : ''
    }));
  };

  const handlePaymentReceiverChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      paymentReceiver: value,
      relationBankName: value === 'Relation' ? prev.relationBankName : '',
      relationAccountNumber: value === 'Relation' ? prev.relationAccountNumber : '',
      relationBranch: value === 'Relation' ? prev.relationBranch : '',
      relationIfscCode: value === 'Relation' ? prev.relationIfscCode : ''
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      category: value,
      guardianOptions: [],
      customRequirements: ''
    }));
  };

  const handleGuardianOptionsChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      guardianOptions: prev.guardianOptions.includes(value)
        ? prev.guardianOptions.filter(option => option !== value)
        : [...prev.guardianOptions, value]
    }));
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((value) => form.append(key, value));
      } else {
        form.append(key, formData[key]);
      }
    }
    try {
      await axios.post('https://api.marasimpex.com/api/users/register', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Registration successful');
      router.push("/");
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error sending data to database');
      router.push("/");
    }
  };
  

  const renderGuardianOptions = () => {
    switch (formData.category) {
      case 'Guardian for Children':
        return (
          <div className="space-y-2">
            <label className="block font-semibold">Select Activities:</label>
            {['Dropping School, Tutuin' , 'Go for Shopping, Market', 'Travelling With Kids', 'Other Activity'].map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  value={option}
                  checked={formData.guardianOptions.includes(option)}
                  onChange={handleGuardianOptionsChange}
                  className="mr-2"
                />
                <label htmlFor={`option-${index}`} className="text-gray-700">{option}</label>
              </div>
            ))}
          </div>
        );
      case 'Guardian for Self':
        return (
          <div className="space-y-2">
            <label className="block font-semibold">Select Services:</label>
            {['For hospital Visit', 'For Shopping', 'For bank passbook Updation'].map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`self-option-${index}`}
                  value={option}
                  checked={formData.guardianOptions.includes(option)}
                  onChange={handleGuardianOptionsChange}
                  className="mr-2"
                />
                <label htmlFor={`self-option-${index}`} className="text-gray-700">{option}</label>
              </div>
            ))}
          </div>
        );
      case 'Others':
        return (
          <div className="space-y-2">
            <label className="block font-semibold">What Work You Can Done:</label>
            <input
              type="text"
              name="customRequirements"
              value={formData.customRequirements}
              onChange={handleChange}
              placeholder="Enter your requirements"
              className="p-3 border border-gray-300 rounded w-full"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <TopNavbar />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-md sm:shadow-none">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Basic Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-3 border border-gray-300 rounded"
                required
              />

<input
                type="text"
                name="fathername"
                value={formData.fathhername}
                onChange={handleChange}
                placeholder="Father Name"
                className="p-3 border border-gray-300 rounded"
                required
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-3 border border-gray-300 rounded"
                required
              />
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <select
              name="category"
              value={formData.category}
              onChange={handleCategoryChange}
              className="p-3 border border-gray-300 rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="Guardian for Children">Guardian for Children</option>
              <option value="Guardian for Self">Attendant For your Parents</option>
              <option value="Others">Others</option>
            </select>
            {renderGuardianOptions()}
            {formData.category === 'Attendant' && (
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              >
                <option value="">Select Availability</option>
                <option value="1Hour">1 Hour</option>
                <option value="2 to 3 hours">2 to 3 hours</option>
                <option value="5 to 6 hours">5 to 6 hours</option>
                <option value="full day">Full Day</option>
              </select>
            )}
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Qualification"
              className="p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Personal Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="PAN Number"
                className="p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="Aadhar Number"
                className="p-3 border border-gray-300 rounded"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              >
                <option value="">Select Religion</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Pin Code"
                className="p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Are you married?</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value="yes"
                    checked={formData.maritalStatus === 'yes'}
                    onChange={handleMaritalStatusChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value="no"
                    checked={formData.maritalStatus === 'no'}
                    onChange={handleMaritalStatusChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
            {formData.maritalStatus === 'yes' && (
              <>
                <input
                  type="text"
                  name="wifeName"
                  value={formData.wifeName}
                  onChange={handleChange}
                  placeholder="Wife Name"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="wifeAadharNumber"
                  value={formData.wifeAadharNumber}
                  onChange={handleChange}
                  placeholder="Wife Aadhar Number"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="wifePanNumber"
                  value={formData.wifePanNumber}
                  onChange={handleChange}
                  placeholder="Wife PAN Number"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
              </>
            )}
            <input
              type="text"
              name="jobStatus"
              value={formData.jobStatus}
              onChange={handleChange}
              placeholder="Job Status"
              className="p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Bank Name"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Branch"
                className="p-3 border border-gray-300 rounded"
                required
              />

<input
                type="text"
                name="branchname"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Branch Name "
                className="p-3 border border-gray-300 rounded"
                required
              />
              
            </div>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              placeholder="IFSC Code"
              className="p-3 border border-gray-300 rounded"
              required
            />
            <div>
              <label className="block font-semibold">In which Account you want to revice payment?</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentReceiver"
                    value="Self"
                    checked={formData.paymentReceiver === 'Self'}
                    onChange={handlePaymentReceiverChange}
                    className="mr-2"
                  />
                  Self
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="paymentReceiver"
                    value="Relation"
                    checked={formData.paymentReceiver === 'Relation'}
                    onChange={handlePaymentReceiverChange}
                    className="mr-2"
                  />
                  Relation
                </label>
              </div>
            </div>
            {formData.paymentReceiver === 'Relation' && (
              <>
                <input
                  type="text"
                  name="relationBankName"
                  value={formData.relationBankName}
                  onChange={handleChange}
                  placeholder="Relation Bank Name"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="relationAccountNumber"
                  value={formData.relationAccountNumber}
                  onChange={handleChange}
                  placeholder="Relation Account Number"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="relationBranch"
                  value={formData.relationBranch}
                  onChange={handleChange}
                  placeholder="Relation Branch"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="relationIfscCode"
                  value={formData.relationIfscCode}
                  onChange={handleChange}
                  placeholder="Relation IFSC Code"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
              </>
            )}
          </div>

            {/* Reference Details */}
            <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Reference Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Reference Name"
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="Reference Number"
                className="p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="Reference Address"
                className="p-3 border border-gray-300 rounded"
                required
              />
                   <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="PIN Code"
                className="p-3 border border-gray-300 rounded"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              >
                <option value="">Select Relation</option>
                <option value="Male">Parents</option>
                <option value="Female">Relatives</option>
                <option value="Other">Friend</option>
                <option value="Female">Other</option>
              </select>
            </div>  
            <div> 
              </div>
              </div>
              


          {/* Document Uploads */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
            <div>
              <label className="block font-semibold">Upload Higher Education Proof:</label>
              <input
                type="file"
                name="marksheet"
                onChange={handleFileChange}
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Upload Image Pan, addhar(Both Side),Selfie:</label>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Upload Cheque:</label>
              <input
                type="file"
                name="checkBook"
                onChange={handleFileChange}
                className="p-3 border border-gray-300 rounded w-full"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

