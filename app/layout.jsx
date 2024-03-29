import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './component/navbar'
import Footer from './component/footer'
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className="content">
      <Navbar/>
      <div className={inter.className}>{children}</div>
      <Footer/>
    </div>
  );
}
