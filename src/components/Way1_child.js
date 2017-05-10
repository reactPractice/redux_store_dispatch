import React from 'react';

const propTypes = {
    inc: React.PropTypes.func,
    dec: React.PropTypes.func
}

const defaultProps = {
    inc: () => console.error('inc is undefined'),
    dec: () => console.error('dec is undefined')
}

class Way1_child extends React.Component {
    
    render() {
        return(
            <div>
                <button onClick={() => this.props.inc()}>+</button>
                <button onClick={() => this.props.dec()}>-</button>
            </div>
        );
    }
    
}

Way1_child.propTyps = propTypes;
Way1_child.defaultProps = defaultProps;

export default Way1_child;