import './globals.css';

import { Inter } from 'next/font/google';
import Prvider from '@/Redux/Prvider';

const inter = Inter({ subsets: ['latin'] });

// Updated metadata for SEO
export const metadata = {
  title: 'Maras: Booking Made Brilliant', // Updated title for SEO
  description: 'Explore seamless hotel bookings and travel services with Maras. Book your stay, shop for essentials, and manage work-related travel effortlessly.', // Updated description for SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Maras, hotel booking, travel, e-commerce, work travel, school travel" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Maras" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <Prvider>
          {/* Consider adding a Navbar here for consistent navigation */}
          {children}
        </Prvider>
      </body>
    </html>
  );
}
