"use client"
import React from 'react'
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }) => {
    const pathname = usePathname()
    return (
        <>
            {!pathname.includes("studio") && <Navbar />}
            {children}
            {!pathname.includes("studio") && <Footer />}
        </>
    )
}

export default MainLayout