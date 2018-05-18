import React from 'react';

export default function house(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zipcode}</p>
            <p>{props.mortgage}</p>
            <img src={props.image} alt=""/>
            <p>{props.rent}</p>
            <button onClick={() => props.remove(props.id)}>Delete</button>
        </div>
    )
}