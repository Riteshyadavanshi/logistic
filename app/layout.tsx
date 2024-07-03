import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const inter = Poppins({ subsets: ["latin"] ,weight:["100","200","300","400","500","600","700","800","900"]});

export const metadata: Metadata = {
  title: "logistic app",
  description: "Give a chance to serve ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
        <div className=" z-10  right-0 bottom-14  w-14 h-14 rounded-full bg-black fixed mr-2 ">
         <Link href="https://wa.me/+918291047365">
          <Image src={"/whatsapp.jpeg"} width={500} height={500} alt="ds" className="rounded-full"/>
         </Link>
        </div>
        <div className="mt-20 min-w-[380px]">
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
