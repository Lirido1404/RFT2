import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import FlecheRemonte from "./(components)/FlecheRemonte";
import Footer from "./(components)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlecheRemonte/>
        <div>
          <Nav />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}