import React from 'react'
import '../components/CSS/Navbar.css'
import navLOGO from '../images/navLOGO.png'
import searchLOGO from '../images/search.png'

function Navbar() {
    return (
        <>
            <div className="nav_container">
                <div className="logo">
                    <img src={navLOGO} alt="navlogo" />
                </div>
                <div className="links">
                    <ul>
                        <li>Foods & Services +</li>
                        <li>Explore</li>
                        <li>Menu</li>
                        <li>Products +</li>
                    </ul>
                </div>
                <div className="search_container">
                    <div className="search_image">
                        <img src={searchLOGO} alt="searchlogo" className='searchIMAGE'/>
                    </div>
                    <div className="search_box">
                        <input type="search" placeholder='Search...' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar