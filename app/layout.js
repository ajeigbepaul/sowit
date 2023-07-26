import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOWIT",
  description: "A market place for good cuts and sows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Toaster/>
          <Header />
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
