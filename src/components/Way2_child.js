import React from 'react';

// store를 직접 import 해서 사용할 수 있다.
import {store} from '../index';
//액션 생성자
import { increase, decrease } from '../actions';

const propTypes = {
    
}

const defaultProps = {
    
}

class Way1_child extends React.Component {
    
    render() {
        return(
            <div>
                <button onClick={() => store.dispatch(increase())}>+</button>
                <button onClick={() => store.dispatch(decrease())}>-</button>
            </div>
        );
    }
    
}

Way1_child.propTyps = propTypes;
Way1_child.defaultProps = defaultProps;

export default Way1_child;