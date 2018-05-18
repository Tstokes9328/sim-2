import React from 'react';
import './header.css';
import logo from './logo.png';
export default function header(props){
    return(
        <div className="header">
             <img src={logo} alt="" className="logo"/>
        </div>
    )
}