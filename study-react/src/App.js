import React from "react";
//import React, {Fragment} from "react";

// 리액트에서는 여러개의 요소를 하나의 요소로 감싸지 않으면 오류 생긴다
function App() {
  const name = "할로"; //const는 ES6의 문법, 상수 선언할 때 사용
  return(
  // Fragment는 생략도 가능하다.
  <>    
  <h1>{name}  안녕?</h1>
  <h2>잘 작동하니?</h2>
  </>
  );
  
}

export default App;