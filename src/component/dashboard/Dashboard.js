    /* Importing Modules */
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

    /* Importing Components */
import House from '../house/House';


class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.removeHouse = this.removeHouse.bind(this);
    }

    /* Methods */
    componentDidMount(){
        axios.get('/api/houses').then((response) => {
            this.setState({houses: response.data})
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
                    <House remove={this.removeHouse} id={element.id} name={element.name} address={element.address} city={element.city} state={element.state} zipcode={element.zipcode}/>
            )
        })
        return(
            <div>
                {houseList}
                <Link to="/wizard/step1"><button>Add New Property</button></Link>
            </div>
        )

    }
}

export default Dashboard;