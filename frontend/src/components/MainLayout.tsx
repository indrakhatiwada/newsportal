
import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="px-2">
            <Header />
            <div className="h-screen w-screen px-4 lg:px-16">
            {children}
            </div>
            <Footer />
        </div>
        
    )
}

export default MainLayout