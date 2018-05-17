import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

import {resetState} from '../../ducks/reducer';

class Wizard extends Component {
    

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/wizard/step1" component={StepOne} />
                    <Route path="/wizard/step2" component={StepTwo} />
                    <Route path="/wizard/step3" component={StepThree} />
                </Switch>
                <Link to="/"><button onClick={(event) => this.props.resetState()}>Cancel</button></Link>
            </div>
        )

    }
}

export default connect(null, {resetState})(Wizard);