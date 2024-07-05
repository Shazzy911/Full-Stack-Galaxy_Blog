import React from "react";
import "./styles/global.scss";
import { Poppins } from "next/font/google";
import Providers from "./redux/Providers"  // This is the Providers coming from Redux store...
import TopBar from "@/components/top_bar/TopBar"; 
import SideBar from "@/components/side_bar/SideBar";
import Footer from "@/components/footer/Footer";
const poppins = Poppins(
  {
    weight: "400",
    subsets: ["latin"],
  }
);
export const metadata = {
  title: "Galaxy Blog - Home",
  description:
    "This is the blogging app for the Galaxy Blog, which includes all the information related to the Real time news Stories and News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Here in Providers we're using Redux for the whole Application... */}
        <Providers>   
          <div className="main2-container">
            <TopBar />
            <div className="container">
              <SideBar />
              <div className="main-container">
                {children}

                {/* Make research why are we using React.Fragment here... */}
                <React.Fragment>
                  <Footer />
                </React.Fragment>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
};
