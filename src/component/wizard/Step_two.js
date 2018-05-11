import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Step_two extends Component{

    render(){
        console.log(this.props.state)
        return(
            <div>
                Image URL:
                <input type="text" placeholder="Image URL.."/>
                <Link to="/wizard/step1"><button>Previous Step</button></Link>
                <Link to="/wizard/step3"><button>Next Step</button></Link>
            </div>
        )
    }
}

export default Step_two;