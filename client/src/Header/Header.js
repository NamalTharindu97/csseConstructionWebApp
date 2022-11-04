import React from "react";
import './navbar.css';
import HeaderImg from '../asset/Header.png';
import builder from '../asset/builder.png';

const Header = () => {
    return(
        <>
            <nav className="main-nav">
                <div className="logo">

                </div>
                <div className="menu-link">
                    <ul>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Requisition
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                            <a class="dropdown-item" href="/">Sites</a>
                            <a class="dropdown-item" href="/ItemHome">Items</a>
                            
                            </div>
                            </li>

                           <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Requisition
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                            <a class="dropdown-item" href="/add">Sites ADD</a>
                            <a class="dropdown-item" href="/item/add">Items ADD</a>
                            
                            </div>
                            </li>
              
                    </ul>
                </div>
            </nav>
    
            <div className="HeaderImg">
                <img src={HeaderImg}></img>
            </div>
            <div className="HeaderTxt">
                <h1>Procurement Construction System</h1>
                <h5>MD Holdings (Pvt) Ltd</h5>
            </div>
            { <div className="builderImg">
                <img src={builder} />
            </div> }
            
        </>
    );
};

export default Header;