import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {updateName, updateAddress, updateCity, updateState, updateZipcode} from '../../ducks/reducer';

class StepOne extends Component {

    render(){
        console.log(this.props)
        return(
            <div>
                Wizard
                <input type="text" placeholder="name.." value={this.props.name} onChange={(event) => this.props.updateName(event.target.value)}/>
                <input type="text" placeholder="address.." value={this.props.address}onChange={(event) => this.props.updateAddress(event.target.value)}/>
                <input type="text" placeholder="city.." value={this.props.city} onChange={(event) => this.props.updateCity(event.target.value)}/>
                <input type="text" placeholder="state.." value={this.props.stae} onChange={(event) => this.props.updateState(event.target.value)}/>
                <input type="text" placeholder="zipcode.." value={this.props.zipcode} onChange={(event) => this.props.updateZipcode(event.target.value)}/>
                <Link to="/wizard/step2"><button>Next Step</button></Link>
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
        zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, {updateAddress, updateCity, updateName, updateState, updateZipcode})(StepOne);