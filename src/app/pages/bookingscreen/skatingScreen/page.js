"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; 

import styles from './skatingScreen.module.css';
 
import TopNavbar from '@/app/components/topnavbar/page';
import Footer from '@/app/components/footer/page';

const services = [
    {
      id: '1',
      type: 'Private Skating Lesson (1-on-1)',
      price: '₹499',
      time: '1 hr',
      description: 'One-on-one skating lesson tailored to your skill level, focusing on improving balance, technique, and confidence on skates.',
      imageUrl: '/images/dressing.jpg',
    },
   
    {
      id: '3',
      type: 'Advanced Skating Techniques',
      price: '₹599',
      time: '1 hr',
      description: 'Advanced coaching session for experienced skaters, covering tricks, spins, jumps, and faster-paced skating techniques.',
      imageUrl: '/images/dressing.jpg',
    },
   
  ];

export default function SkatingScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [slotModalVisible, setSlotModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [addressDetails, setAddressDetails] = useState({
    houseNumber: '',
    landmark: '',
    name: '',
    pinCode: '',
  });
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const dates = [];
      for (let i = 0; i < 3; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        const dateString = nextDate.toDateString().split(' ').slice(0, 3).join(' ');
        dates.push(dateString);
      }
      setAvailableDates(dates);
    };
    generateDates();
  }, []);

  const checkAuthentication = async (isUrgent = false) => {
    const token = localStorage.getItem('token');
    if (token) {
      openModal(isUrgent);
    } else {
      setLoginModalVisible(true);
      setTimeout(() => {
        setLoginModalVisible(false);
        router.push('/');
      }, 1000);
    }
  };

  const openModal = (isUrgent = false) => {
    setUrgent(isUrgent);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openSlotModal = () => {
    setSlotModalVisible(true);
  };

  const closeSlotModal = () => {
    setSlotModalVisible(false);
  };

  const onBook = async () => {
    if (!selectedDate || !selectedTime) {
      alert('Error: Please select a date and time slot.');
      return;
    }

    const token = localStorage.getItem('token');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    const bookingDetails = {
      address: addressDetails.houseNumber + ', ' + addressDetails.landmark,
      pinCode: addressDetails.pinCode,
      serviceType: services[0].type,
      date: selectedDate,
      time: selectedTime,
    };

    try {
      const response = await fetch('http://172.20.64.1:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      alert(`Booking Confirmed for ${selectedDate} at ${selectedTime}`);
      closeSlotModal();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const onUrgentBook = () => {
    if (!addressDetails.houseNumber || !addressDetails.pinCode) {
      alert('Error: Please enter complete address details.');
      return;
    }
    alert(`Urgent Booking Confirmed:\n${addressDetails.name}\n${addressDetails.houseNumber}\n${addressDetails.pinCode}`);
    closeModal();
  };

  const renderService = (item) => (
    <div key={item.id} className={styles.card}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{item.type}</h2>
        <p className={styles.text}>{item.price}</p>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.buttonsRow}>
          <button className={styles.addButton} onClick={() => checkAuthentication(false)}>
            Add
          </button> 
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={item.imageUrl} alt={item.type} width={80} height={80} className={styles.image} />
      </div>
    </div>
  );

  return (
    <>
    <TopNavbar />
    <div className={styles.container}> 
      <div className={styles.serviceList}>{services.map(renderService)}</div>

      {/* Modals */}
      {modalVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Enter Details</h3>
            <input className={styles.input} placeholder="House/Flat Number" value={addressDetails.houseNumber}
              onChange={(e) => setAddressDetails({ ...addressDetails, houseNumber: e.target.value })} />
            <input className={styles.input} placeholder="Complete Address" value={addressDetails.landmark}
              onChange={(e) => setAddressDetails({ ...addressDetails, landmark: e.target.value })} />
            <input className={styles.input} placeholder="Pin Code" value={addressDetails.pinCode} 
              onChange={(e) => setAddressDetails({ ...addressDetails, pinCode: e.target.value })} />
            <input className={styles.input} placeholder="Description (Optional)" value={addressDetails.name} 
              onChange={(e) => setAddressDetails({ ...addressDetails, name: e.target.value })} />
            <div className={styles.modalButtons}>
              {urgent ? (
                <button onClick={onUrgentBook}>Confirm Urgent</button>
              ) : (
                <button onClick={() => { closeModal(); openSlotModal(); }}>Next</button>
              )}
              <button onClick={closeModal} style={{ backgroundColor: 'red' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {slotModalVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.slotModalContent}>
            <h3 className={styles.modalTitle}>When should the nurse arrive?</h3>
            <div className={styles.dateContainer}>
              {availableDates.map((date, index) => (
                <button key={index} className={`${styles.dateBox} ${selectedDate === date ? styles.selectedDateBox : ''}`}
                  onClick={() => setSelectedDate(date)}>
                  {date}
                </button>
              ))}
            </div>
            <h4>Select start time of service</h4>
            <div className={styles.timeContainer}>
              {['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM'].map((time, index) => (
                <button key={index} className={`${styles.timeBox} ${selectedTime === time ? styles.selectedTimeBox : ''}`} 
                  onClick={() => setSelectedTime(time)}>
                  {time}
                </button>
              ))}
            </div>
            <div className={styles.modalButtons}>
              <button onClick={onBook}>Book</button>
              <button onClick={closeSlotModal} style={{ backgroundColor: 'red' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {loginModalVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.loginModalContent}>
            <h3 className={styles.modalTitle}>Please login to use service</h3>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}
