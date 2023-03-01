import React from "react";
import heroPicture from '../assets/photo-grid.png'

export default function Hero(){
    return (
        <div className="hero">
            <img className="hero-image" src={heroPicture} alt="heroPicture" />
            <div className="hero-paragraph">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}