import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import axios from 'axios';

    /* Importing Component Steps */
import Step_one from './Step_one';
import Step_two from './Step_two';
import Step_three from './Step_three';


class Wizard extends Component {
    
    render(){
        return(
            <div>
                <Route path="/wizard/step1" component={Step_one}/>
                <Route path="/wizard/step2" component={Step_two}/>
                <Route path="/wizard/step3" component={Step_three}/>
                <Link to="/"><button>Cancel</button></Link>
            </div>
        )

    }
}

export default Wizard;