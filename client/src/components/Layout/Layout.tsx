import React from "react";
import {Navbar} from "../Navbar"
import {Footer} from "../Footer"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}