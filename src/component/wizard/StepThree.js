import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import {updateMortgage, updateRent} from '../../ducks/reducer';

class StepThree extends Component {

    /* Axios Methods */
    newHouse(){
        let {name, address, city, state, zipcode, mortgage, image, desiredRent} = this.props;
        axios.post('/api/houses', {name, address, city, state, zipcode, mortgage, image, desiredRent}).then(() => {
        }).catch()
    }

    render(){
        return(
            <div>
                Monthly Mortgage Amount:
                <input type="text" value={this.props.mortgage} onChange={(event) => this.props.updateMortgage(event.target.value)}/>
                Desired Monthly Rent Amount:
                <input type="text" value={this.props.desiredRent} onChange={(event) => this.props.updateRent(event.target.value)}/>
                <Link to="/wizard/step2"><button>Previous Step</button></Link>
                <Link to="/"><button onClick={() => this.newHouse()}>Complete</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
        image: state.image,
        mortgage: state.mortgage,
        desiredRent: state.desired_rent
    }
}

export default connect(mapStateToProps, {updateMortgage, updateRent})(StepThree);