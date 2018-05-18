import React from 'react';
import './house.css';

export default function house(props){
    return(
        <div className="house-container">
            <div className="house-box"> 
                <img src={props.image} alt="" className="image"/>
            </div>

            <div className="house-box">
                <p>Name: {props.name}</p>

                <p>Address: {props.address}</p>

                <p>City: {props.city}</p>

                <p>State: {props.state}</p>

                <p>Zipcode: {props.zipcode}</p>
            </div>

            <div className="house-box">
                <p>Mortgage: {props.mortgage}</p>

                <p>Rent: {props.rent}</p>
            </div>

            <button onClick={() => props.remove(props.id)} className="dlt-btn">X</button>
        </div>
    )
}