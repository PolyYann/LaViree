import '../globals.css'
import { getPages } from '../../../Laviree/laviree/sanity/sanity-utils';
import NavBar from '../component/NavBar';
import React from "react";

export const metadata = {
  title: 'La Viree des Ateliers',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html >
      <body className="">
        <NavBar pages={pages} />
        <main className="py-20 max-w-7xl mx-auto ">{children}</main>
      </body>
    </html>
  )
}
