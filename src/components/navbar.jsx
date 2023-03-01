import React from "react";
import brand from '../assets/airbnb-logo.png';

export default function NavBar(){
    return (
        <nav>
            <div className="airBrand">
                <img src={brand} alt="" />
            </div>
        </nav>
    );
}
