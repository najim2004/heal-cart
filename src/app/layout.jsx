import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/services/AuthProvider";
import StoreProvider from "@/allproviders/StoreProvider";
import SidebarProvider from "@/allproviders/SidebarProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import QueryProvider from "@/allproviders/QueryProvider";
import DataProvider from "@/allproviders/DataProvider";
export const metadata = {
  title: "HealCart",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <AuthProvider>
          <StoreProvider>
            <QueryProvider>
              <DataProvider>
                <Navbar />
                <SidebarProvider>{children}</SidebarProvider>
                <Footer />
                <Toaster />
              </DataProvider>
            </QueryProvider>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
