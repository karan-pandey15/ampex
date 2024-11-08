// pages/cancel-refund.js
import React from 'react';
import Head from 'next/head';
import Navbar from '@/app/components/navbar/page';
import Footer from '@/app/components/footer/page';
import './cancelRefundStyle.css';

const CancelRefund = () => {
  return (
    <>
      <Head>
        <title>Cancel and Refund Policy - Maras</title>
      </Head>
      <Navbar />
      <div className="cancelRefundContainer">
        <h1 className="cancelRefundHeading">Cancel and Refund Policy</h1>
        <p className="cancelRefundText">Effective Date: 08/11/2024</p>

        <h2 className="cancelRefundSubheading">Cancellation Policy</h2>
        <p className="cancelRefundText">
          At Maras, we understand that plans can change. You may cancel your booking based on the following terms:
        </p>
        <ul className="cancelRefundList">
          <li>Cancellations made within 24 hours of booking are eligible for a full refund.</li>
          <li>Cancellations made up to 7 days before the scheduled date will incur a 10% cancellation fee.</li>
          <li>No refunds will be provided for cancellations made less than 7 days before the booking date.</li>
        </ul>

        <h2 className="cancelRefundSubheading">Refund Policy</h2>
        <p className="cancelRefundText">
          Refunds will be processed within 7-10 business days through the original payment method used during the booking.
        </p>
        <p className="cancelRefundText">
          For payments processed through Razorpay, refunds may take additional time depending on your bank&apos;s processing times.
        </p>

        <h2 className="cancelRefundSubheading">How to Request a Refund</h2>
        <p className="cancelRefundText">
          To initiate a cancellation or refund, please contact our support team at:
        </p>
        <p className="cancelRefundText">Email: support@maras.com</p>
        <p className="cancelRefundText">Phone: 9999 781282</p>
      </div>
      <Footer />
    </>
  );
};

export default CancelRefund;
