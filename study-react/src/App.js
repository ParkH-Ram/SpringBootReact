// import React from 'react';   // 컴포넌트 코드 간단히 rsc  <<
// import './App.css';

//import React, {Fragment} from "react";

// AND연산자를 사용한 조건부 랜더링
// function App() {
//   const name = "웩트" // 상수 선언
//   // return <div>{name === '리액트' ? <h1>리액트입니다</h1> : null} </div>;
//   return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
// }

// // 랜더링을 할 때 0 이면 0이 출력
// function App(){
//   const number = 0;
//   return number &&<div>와?</div>
// }

//undefined를 렌더링 x
// function App(){
//   const name = undefined;
//   return name || '값이 undefined 임다';
// }

// JSX 내부에서 undefined를 렌더링하는 것은 괜춘
// function App(){
//   const name = undefined;
//   // return <div>{name}</div>
//   return <div>{name || '리액트'}</div>
// }

// 인라인 스타일링
// 리액트에서 DOM요소에 스타일 적용할 때 문자열 형태로 넣는것이 아닌 객체 형태로 넣어야 함
// -문자가 표시 되어 있는건 캐멀 스타일로 변경
// ex background-color -> backgroundColor
// function App() {
// const name = '리액트';
// const style = {
//   //background-color는 backgroundColor와 같이 -가 사라지고 카멜표기법으로 작성
//   backgroundColor : 'black',
//   color : 'aqua',
//   fontSize : '48px', // font-size -> fontSize
//   fontWeight : 'bold', // font-weight -> fontWeight
//   padding : 16 // 단위를 생략하면 px로 지정
// }
// return <div style={style}>{name}</div>
//   const name = '랙트';

//   return (
//     <>
//       <div className="react">
//         {name}
//         <App2></App2>
//       </div>
//       <input />
//     </>
//   );
// }
// function App2() {
//   const name = '헬로우';

//   return (
//     <div>
//       <div className="react">{name}</div>

//       <h1>들여쓰기가 이상한 코드</h1>
//       <h2>따라 치기도 히믈다 </h2>
//       <p>아따</p>
//     </div>
//   );
// }

// // this  값 확인
// function BlackDog() {
//   this.name = '흰둥이';
//   return {
//     name: '검둥이',
//     bark: function () {
//       // 리턴 하는 name의 this name
//       console.log(this.name + ' : 멍멍 ! ');
//     },
//   };
// }
// const blackDog = new BlackDog();
// blackDog.bark(); // 검둥이 : 멍멍

// function WhiteDog() {
//   this.name = '흰둥이';
//   return {
//     name: '검둥이',
//     bark: () => {
//       // 얘가 정의하는 this는 부모 필드
//       console.log(this.name + ': 멍멍!');
//     },
//   };
// }

// const whiteDog = new WhiteDog();
// whiteDog.bark(); // 흰둥이 멍멍

// export default App;

// export default App2;x

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name={3}>여기가 자식?</MyComponent>; // MyComponent 내부에서 보여주려면 props.children 값을 보여 주어야 한다.
  // 여기가 자식 부분이 {children} 값이 들어감
};

// MyComponent.defaultProps = {
//   name: '기본이유',
// };

export default App;
