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
    number: 0,
    fixedNumber: 0,
    number2: 0,
  };

  render() {
    //3.4.1
    // const { number, number2, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회

    // 3.4.1.2
    const { number, fixedNumber, number2 } = this.state; // state를 조회할 때는 this.state로 조회

    //3.4.1.3 this.setState에 객체 대신 함수 인자 전달



    return (
      <div>
        <h1>{number}</h1>
        <h2>상수 : {fixedNumber} </h2>
        <h3>그냥 넣은 : {number2}</h3>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            // this.setState({ number: number + 504 });
            // console.log(number, fixedNumber);

            //3.4.1.3
             this.setState(prevState => {
               return {
                 number : prevState.number + 1
               }
              });
            
            
            // 위 코드와 아래 코드는 똑같은 기능
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미 
            this.setState(prevState => ({
              number : prevState.number + 1
            }));


            // 이 두 개를 넣었는데 값이 1만 증가 한다  이유는 state 값이 변하지 않기 때문 
            // this.setState ({number : number + 1});
            // this.setState({number : this.state.number + 1});
            
          }}
        >
          +15
        </button>

        
        <button
        // 3.4.1.4 
        // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            this.setState(
              {
                number2 : number2 + 1 
              },
              // callback (void)
              () => {
                console.log("방금 호출 됐습니다")
                console.log(this.state);
              }
            );
          }}
        >
          + number2
        </button>
      </div>
    );
  }
}

export default Counter;
