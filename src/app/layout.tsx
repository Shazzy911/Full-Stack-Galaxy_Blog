import React from "react";
import "./styles/global.scss";
import { Poppins } from "next/font/google";
import Providers from "./redux/Providers"
import SideBar from "@/components/sidebar/SideBar";
import Footer from "@/components/footer/Footer";
import TopBar from "@/components/topbar/TopBar";

const ubuntu = Poppins(
  {
    weight: "400",
    subsets: ["latin"],
  }
);

export const metadata = {
  title: "Galaxy - Personal Blog",
  description:
    "This is the blogging app for the Galaxy Blog, which includes all the information related to the Real time news Stories and News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>
          <div className="main2-container">
            <TopBar />
            <div className="container">
              <SideBar />
              <div className="main-container">
                {children}
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
}
