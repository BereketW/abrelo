import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import VideoOfTheMonth from "@/components/VideoOfTheMonth";
import Footer from "@/components/Footer";

const poppins = Poppins({weight:['400','500', "600", "700", "800"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
     
      <html>
        <body className={poppins.className}>
          {children}
          <VideoOfTheMonth />
          <Footer />
          </body>
      </html>

  );
}
