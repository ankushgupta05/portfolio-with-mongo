import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "This is oficial portfolio and all about ankush gupta Devloper! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container bg-black px-2 py-1 ">
          {children}
        </div>
        <Footer />
      </body>

    </html>
  );
}
