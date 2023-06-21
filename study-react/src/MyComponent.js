import React from 'react';

// const MyComponent = (props) => {
//   return (
//     <div>
//       나으 새롭고 멋진 컴포넌트 내 이름은 {props.name}다<br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

//비구조 할당 문법
const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕 내이름은 {name} 이고 <br />
      자식은 {children} 이야
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
