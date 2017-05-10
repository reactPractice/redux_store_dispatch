import React from 'react';
import Way1_child from './Way1_child';

const propTypes = {
    val: React.PropTypes.number,
    diff: React.PropTypes.number,
    inc: React.PropTypes.func,
    dec: React.PropTypes.func,
    setDiff: React.PropTypes.func
}

const defaultProps = {
    val: 0,
    diff: 1,
    inc: () => console.error('inc is undefined'),
    dec: () => console.error('dec is undefined'),
    setDiff: () => console.error('setDiff is undefined')
}

class Way1 extends React.Component {
    
    handleChange(e) {
        this.props.setDiff(e.target.value);
    }
    
    render() {
        return(
            <div>
                <h1>WAY 1</h1>
                Diff: <input value={this.props.diff} onChange={this.handleChange.bind(this)} /><br />
                <input value={this.props.val} /><br />
                <Way1_child inc={this.props.inc} dec={this.props.dec}/>
            </div>
        );
    }
    
}

Way1.propTyps = propTypes;
Way1.defaultProps = defaultProps;

export default Way1;