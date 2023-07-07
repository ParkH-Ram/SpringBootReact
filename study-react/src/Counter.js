import React, { Component } from 'react';

class Counter extends Component {
  // 3. 4. 1
  // constructor(props) {
  //   super(props);
  //   // state 의 초깃값 설정하기
  //   this.state = {
  //     number: 0,
  //     number2: 7590,
  //     fixedNumber: 150,
  //   };

  // 3.4.1.2 state를 constructor 에서 꺼내기
  state = {
    number: 4,
    fixedNumber: 500,
    number2: 100,
  };

  render() {
    //3.4.1
    // const { number, number2, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회

    // 3.4.1.2
    const { number, fixedNumber, number2 } = this.state; // state를 조회할 때는 this.state로 조회

    return (
      <div>
        <h1>{number}</h1>
        <h2>상수 : {fixedNumber} </h2>
        <h3>그냥 넣은 : {number2}</h3>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 504 });
            console.log(number, fixedNumber);
          }}
        >
          +1
        </button>

        <button
          onClick={() => {
            this.setState({ number: number * number2 });
          }}
        ></button>
      </div>
    );
  }
}

export default Counter;
