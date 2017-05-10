import React from 'react';
import Way2_child from './Way2_child';

import {store} from '../index';
import {setDiff} from '../actions';

const propTyps = {
    val: React.PropTypes.number,
    diff: React.PropTypes.number
}

const defaultProps = {
    val: 0,
    diff: 1
}

class Way2 extends React.Component {
    
    handleChange(e) {
        store.dispatch(setDiff(e.target.value));
    }
    
    render() {
        return(
            <div>
                <h1>WAY 2</h1>
                Diff: <input value={this.props.diff} onChange={this.handleChange.bind(this)} /><br />
                <input value={this.props.val} /><br />
                <Way2_child/>
            </div>
        );
    }
    
}

Way2.propTyps = propTyps;
Way2.defaultProps = defaultProps;

export default Way2;