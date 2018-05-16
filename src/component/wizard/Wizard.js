import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }

            /* Binding The Handle Change Methods */
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeZip = this.handleChangeZip.bind(this);

            /* Binding The Axios Methods */
        this.newHouse = this.newHouse.bind(this);
    }

    /* Handle Change Methods */

    handleChangeName(event){
        this.setState({name: event.target.value})
    }

    handleChangeAddress(event){
        this.setState({address: event.target.value})
    }

    handleChangeCity(event){
        this.setState({city: event.target.value})
    }

    handleChangeState(event){
        this.setState({state: event.target.value})
    }

    handleChangeZip(event){
        this.setState({zipcode: event.target.value})
    }

        /* Axios Methods */
    newHouse(){
        let {name, address, city, state, zipcode} = this.state;
        axios.post('/api/houses', {name, address, city, state, zipcode}).then(() => {
        }).catch()
    }



    render(){
        return(
            <div>
                Wizard
                <input type="text" placeholder="name.." onChange={this.handleChangeName}/>
                <input type="text" placeholder="address.." onChange={this.handleChangeAddress}/>
                <input type="text" placeholder="city.." onChange={this.handleChangeCity}/>
                <input type="text" placeholder="state.." onChange={this.handleChangeState}/>
                <input type="text" placeholder="zipcode.." onChange={this.handleChangeZip}/>
                <Link to="/"><button onClick={this.newHouse}>Complete</button></Link>
                <Link to="/"><button>Cancel</button></Link>
            </div>
        )

    }
}

export default Wizard;