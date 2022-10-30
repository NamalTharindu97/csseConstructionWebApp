import React from "react";
import './navbar.css';
import HeaderImg from '../asset/Header.png';

const Header = () => {
    return(
        <>
            <nav className="main-nav">
                <div className="logo">

                </div>
                <div className="menu-link">
                    <ul>
                        <li> <a href="/">Home</a> </li>
                        <li> <a href="/add">Add</a> </li>
                        <li> <a href="#">Requisition</a> </li>
                        <li> <a href="#">Order</a> </li>
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
            
        </>
    );
};

export default Header;