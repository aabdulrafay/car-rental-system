import './globals.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Car Rental System',
  description: 'Book your ride anytime, anywhere!',
  keywords: ['car rental', 'book cars online', 'cheap car rental'],
  authors: [{ name: 'Abdul Rafay' }],
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
        <Header />
        <Navbar />
        </header>
        <main className="flex-grow p-6">{children}</main>
        <footer>
        <Footer />
        </footer>
      </body>
    </html>
  );
}
