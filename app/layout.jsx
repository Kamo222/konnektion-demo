import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";



const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: "--font--jetbrainsMono"});

export const metadata = {
  title: "Konnektion Technologies",
  description: "Give your business the digital advantage. Make your business visible with a website that are designed to turn leads into sales and couple it with a digital marketing strategy including SEO, content marketing, email marketing and paid advertising.",
};

export default function RootLayout({ children }) {

  

  return (
    <html lang="en">
      
      <body className={jetbrainsMono.className}>
        <Header />
        {children }
        <Footer />
      </body>
    </html>
  );
}
