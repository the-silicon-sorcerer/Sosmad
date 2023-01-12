import './home.module.css'

import React from "react"
import Footer from "../components/footer/footer.compoent"
import { Outfit } from '@next/font/google'



const outfit = Outfit()

const RootLayout = ({ children }
    : { children: React.ReactNode }) => {
    return (
        <html lang="en" className={outfit.className}>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout