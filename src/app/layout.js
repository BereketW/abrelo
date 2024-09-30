import { Poppins } from "next/font/google";
import "./globals.css";
import VideoOfTheMonth from "@/components/VideoOfTheMonth";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import GetPathname from "@/scripts/pathname";

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ["latin"] });

export const metadata = {
  title: "Abrelo HD",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const pathname =  <GetPathname path={"/admin"}/> 
  const isAdminPage = JSON.stringify(pathname.props.path) === "/admin"

  return (
    <html className="scroll-smooth">
      <body className={poppins.className}>
        <ToastContainer />
       
        {/* Client Component */}
        {children}
        {!pathname && <><VideoOfTheMonth />
        <Footer /></>}
      </body>
    </html>
  );
}
