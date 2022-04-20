import React from "react"

export default function Layout() {
    return (
        <div className="md:container md:mx-auto">
            <footer className='mt-32'>
                copyright {new Date().getFullYear()}
            </footer>
        </div>
    )
}