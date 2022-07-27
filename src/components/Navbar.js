import React,{useState} from 'react'
import '../components/CSS/Navbar.css'
import navLOGO from '../images/navLOGO.png'
import searchLOGO from '../images/search.png'

function Navbar() {
    const [search, setsearch] = useState("hidden")
    const searchCLicked = ()=>{
        if(search === "hidden"){
            setsearch("");
        }
        else{
            setsearch("hidden");
        }
    }
    return (
        <>
            <div className="nav_container">
                <div className="logo">
                    <img src={navLOGO} alt="navlogo" />
                </div>

                <div className="linksSearch">
                    <div className="links">

                        <ul>
                            <li className='food'>Foods & Services +
                                <ul className="sub1">
                                    <li className="liCommon">Chicken Fries</li>
                                    <li className="liCommon">Biscuits</li>
                                    <li className="liCommon">Apple Pie</li>
                                    <li className="liCommon">Cornbread</li>
                                    <li className="liCommon">Country Fried Steak</li>
                                    <li className="liCommon">Pancakes</li>
                                    <li className="liCommon">Mac and Cheese</li>
                                    <li className='liLast'>See More</li>
                                </ul>
                            </li>

                            <li>Explore</li>
                            <li>Menu</li>

                            <li className='product'>Products +
                                <ul className='sub2'>
                                    <li className="liCommon">Vegetables</li>
                                    <li className="liCommon">Fruits</li>
                                    <li className="liCommon">Dry Foods</li>
                                    <li className="liCommon">Fried</li>
                                    <li className="liCommon">Drinks</li>
                                    <li className='liLast'>See More</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="search_container">
                        <div className="search_image">
                            <img src={searchLOGO} alt="searchlogo" className='searchIMAGE' onClick={searchCLicked}/>
                        </div>
                        <div className={`search_box ${search}`}>
                            <input type="search" placeholder='Search...' className='search'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar