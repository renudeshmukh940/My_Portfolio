import React from 'react'

function Layout({ children, className = "" }) {
    return (
        <div className={`w-full h-full inline-block z-0 px-12 xl:p-10 lg:p-12 md:p-8 sm:p-4 ${className}`}>
            {children}
        </div>
    )
}

export default Layout