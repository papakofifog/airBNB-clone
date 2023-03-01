import React from "react";
//import katie from '../assets/katie-zaferes.png';
import Star from '../assets/star.png';
export default function Card(props){
    return (
      <div className="card">
        <div className="cardImage-purchaseStatus">
            <img className="card-image" src={`src/assets/${props.coverImg}`} alt="katiePicture" />
            <div className="card-purchase-status">{ props.openSpots===0 && "Sold Out"}</div>
        </div>
        
        <div className="card-inscription">
            <img className="card-star-image" src={Star} alt="star-Image" />
            <span className="grey"> {props.stats.rating} ({props.stats.reviewCount})  •</span>
            <span className="grey">{props.location}</span>
        </div>
        <div className="grey">{props.title}</div>
        <div className="grey"><span className="bold">From ${props.price}</span>/ person</div>
      </div>  
    );

}