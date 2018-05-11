import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Step_three extends Component{

        /* Axios Methods */
    newHouse(){
        let {name, address, city, state, zipcode} = this.state;
        axios.post('/api/houses', {name, address, city, state, zipcode}).then(() => {
        }).catch()
    }


    render(){
        return(
            <div>
                <Link to="/"><button onClick={this.newHouse}>Complete</button></Link>
            </div>
        )
    }
}

export default Step_three;