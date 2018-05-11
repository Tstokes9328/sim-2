import React from 'react';

export default function house(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zipcode}</p>
            <button onClick={() => props.remove(props.id)}>Delete</button>
        </div>
    )
}