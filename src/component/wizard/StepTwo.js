import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImage} from '../../ducks/reducer';

class StepTwo extends Component {

    render(){
        console.log(this.props)
        return(
            <div>
                Image:
                <input type="text" placeholder="image.." value={this.props.image} onChange={(event) => this.props.updateImage(event.target.value)}/>
                <Link to="/wizard/step1"><button>Previous Step</button></Link>
                <Link to="/wizard/step3"><button>Next Step</button></Link>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        image: state.image
    }
}

export default connect(mapStateToProps, {updateImage})(StepTwo);