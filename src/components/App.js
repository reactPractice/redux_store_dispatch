import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Way1 from './Way1';
import Way2 from './Way2';

/*
 * Way1 = 부모에서 모든 dispatch 관련 함수 및 상태 값을 받아 props로 전달하는 방법
 * Way2 = 부모는 상태 값만 전달하고 자식에서 필요에 따라 dispatch를 하는 방법
 */

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Way1 
          val={this.props.val} 
          diff={this.props.diff} 
          inc={this.props.inc} 
          dec={this.props.dec} 
          setDiff={this.props.setDiff}
        />
        
        <Way2 
          val={this.props.val}
          diff={this.props.diff}
        />
        <h2>동작을 같이 하므로 두 방법 모두 적용됨을 알 수 있다.</h2>
      </div>
    );
  }
  
}

/* 
 ====================↓↓↓↓↓↓ WAY1 : (부모 -> 자식) 모든 상태 값 + 메소드 포함 ↓↓↓↓↓↓=====================
 ====================↓↓↓↓↓↓ WAY2 : (부모 -> 자식) 모든 상태 값 ↓↓↓↓↓↓=====================
*/

// mapStateToProps: store에 존재하는 모든 상태 값들을 '리듀서 별로' state라는 객체 안에 저장한다.
// 이 저장 값들을 현재 컴포넌트에서 접근하고 싶다면, 'react-redux'의 connect 객체를 이용해 접근 할 수 있다.

/*
  '리듀서 별로' 라는 말은, Redux의 특성상 여러 개의 Reducer를 가질 수 있는데(Flux의 Store 처럼),
  가령 color, location이라는 reducer가 있고, 각각 상태 값으로 rgb, country를 갖고 있다면 실제 store에 등록되는 정보는 다음과 같다.
  
  state = {
    color: { rgb: '0,0,0' },
    location: { country: 'Korea' }
  }
  
  그래서 결국 mapStateToProps에서는 store에 등록된 calc 이라는 reducer에 저장되어 있는 상태 값인 val과 diff를 아래와 같은 방법으로 
  접근할 수 있게 되는 것.
*/
const mapStateToProps = (state) => {
  return {
    val: state.calc.val,
    diff: state.calc.diff
  }
}

// mapDispatchToProps: store에 등록된 모든 액션들을 접근할 수 있게 설정하는 부분.
// 역시 'react-redux'의 connect 객체를 이용해서 최종적으로 사용 가능하게 끔 만들 수 있다.

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(actions.increase()),
    dec: () => dispatch(actions.decrease()),
    setDiff: (diff) => dispatch(actions.setDiff(diff))
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;