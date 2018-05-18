    /* Importing Modules */
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

    /* Importing Components */
import House from '../house/House';
import './dashboard.css';


class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
        this.getUpdatedList = this.getUpdatedList.bind(this);
        this.removeHouse = this.removeHouse.bind(this);
    }

    /* Methods */
    componentDidMount(){
        this.getUpdatedList();
    }


    getUpdatedList(){
        axios.get('/api/houses').then((response) => {
            this.setState({houses: response.data})
            console.log(this.state.houses)
        })
    }


    removeHouse(id){
        axios.delete(`/api/houses/${id}`).then((response) => {
            console.log(response)
        })
    }

    /* Render */
    render(){
        let houseList = this.state.houses.map((element, index) => {
            return(
                    <House remove={this.removeHouse} id={element.id} name={element.name} address={element.address} city={element.city} state={element.state} zipcode={element.zipcode} image={element.image} mortgage={element.mortgage} rent={element.desiredRent}/>
            )
        })
        return(
            <div className="dashboard">
                {houseList}
                <Link to="/wizard/step1"><button>Add New Property</button></Link>
            </div>
        )

    }
}

export default Dashboard;