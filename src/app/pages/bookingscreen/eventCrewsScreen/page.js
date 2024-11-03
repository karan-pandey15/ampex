"use client"
import React, { useState } from 'react'; 
import './EventCrews.css';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TopNavbar from '@/app/components/topnavbar/page';
import Footer from '@/app/components/footer/page';

const EventCrewData = [
  {
    id: '1',
    title: 'Event Setup Crew',
    price: '₹500 per hour',
    rating: 4.8,
    reviews: 30,
    description: 'Experienced crew for setting up stages, booths, and event decor to ensure a smooth start to your event.',
    imageUrl: '/placeholder.png',
  },
  {
    id: '2',
    title: 'Event Registration Support',
    price: '₹300 per hour',
    rating: 4.5,
    reviews: 40,
    description: 'Friendly and professional staff to handle guest registration and check-in processes.',
    imageUrl: '/placeholder.png',
  },
  {
    id: '3',
    title: 'Cleaning and Maintenance Crew',
    price: '₹400 per hour',
    rating: 4.2,
    reviews: 25,
    description: 'Dedicated crew to maintain cleanliness and order throughout the event.',
    imageUrl: '/placeholder.png',
  },
];

const MenuItem = ({ item, onAddPress }) => (
  <div className="card">
    <div className="cardContent">
      <h2 className="title">{item.title}</h2>
      <p className="price">{item.price}</p>
      <div className="ratingContainer">
        <span className="rating">{item.rating} ⭐</span>
        <span className="reviews">({item.reviews})</span>
      </div>
      <p className="description">{item.description}</p>
    </div>
    <Image src={item.imageUrl} alt="Crew Image" width={80} height={80} className="image" />
    <button className="addButton" onClick={() => onAddPress(item)}>
      ADD
    </button>
  </div>
);

const EventCrewsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleAdd = async () => {
    if (selectedItem && address) {
      try {
        const response = await fetch('/api/crewbookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: selectedItem.title,
            price: selectedItem.price,
            rating: selectedItem.rating,
            reviews: selectedItem.reviews,
            description: selectedItem.description,
            address,
            date,
            time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }),
        });

        if (response.ok) {
          alert('Booking created successfully!');
          setModalVisible(false);
          setAddress('');
        } else {
          alert('Failed to create booking.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while creating the booking.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      <TopNavbar />
      <div className="textContainer">
        <h2 className="text">Book Event Crews</h2>
      </div>
      <div className="container">
        {EventCrewData.map((item) => (
          <MenuItem key={item.id} item={item} onAddPress={openModal} />
        ))}
      </div>
      {modalVisible && (
        <div className="modalContainer">
          <div className="modalContent">
            <h3 className="modalTitle">Add Details for {selectedItem?.title}</h3>
            <input
              type="text"
              className="input"
              placeholder="Enter Full Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div>
              <label>Select Date: </label>
              <DatePicker selected={date} onChange={(d) => setDate(d)} className="datePicker" />
            </div>
            <div>
              <label>Select Time: </label>
              <DatePicker
                selected={time}
                onChange={(t) => setTime(t)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="timePicker"
              />
            </div>
            <div className="modalButtons">
              <button onClick={() => setModalVisible(false)} className="cancelButton">Cancel</button>
              <button onClick={handleAdd} className="bookButton">Book</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EventCrewsScreen;
