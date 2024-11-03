// pages/index.js

import TopNavbar from '@/app/components/topnavbar/page';
import React from 'react';

export default function Home() {
  return (
  <div>
    <TopNavbar />
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img
            src="/business.png"
            alt="Karan Pandey"
            style={styles.image}
          />
        </div>
        <div style={styles.info}>
          <h2 style={styles.name}>Karan Pandey</h2>
          <p style={styles.designation}>Guardian For Kids</p>
          <p style={styles.details}>ID Number: 102053625621</p>
          <p style={styles.details}>Join Date: 10/08/2024</p>
          <p style={styles.details}>Email: pandeykaran1515@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#2E2E2E',
  },
  card: {
    width: '400px', // Increased width
    height: '200px', // Increased height
    borderRadius: '15px', // Slightly more rounded corners
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow for a more pronounced effect
    backgroundColor: '#FFFFFF', // Bright white background
    display: 'flex',
    padding: '15px', // Increased padding
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100px', // Increased image size
    height: '100px',
    borderRadius: '10%', // Slightly rounded corners instead of a circle
  },
  info: {
    flex: 2,
    paddingLeft: '20px', // More space between image and text
  },
  name: {
    margin: 0,
    fontSize: '18px', // Slightly larger font for the name
    fontWeight: 'bold',
    color: '#000',
  },
  designation: {
    margin: '8px 0', // Slightly increased margin for spacing
    fontSize: '16px',
    color: '#555', // Darker text color for the designation
  },
  details: {
    margin: '4px 0', // Slightly increased spacing between details
    fontSize: '14px', // Larger font size for details
    color: '#777', // Lighter text color for details
  },
};
