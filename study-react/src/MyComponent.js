import React from 'react';
import PropTypes from 'prop-types';

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
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕 내이름은 {name} 이고 <br />
//       자식은 {children} 이야
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// 함수의 파라미터가 객체인 경우 바로 비구조화해서 사용

// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name} 입니다. <br />
//       자식은 {children}
//       입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: ' 기본 이름 ',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
// };

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세. 내 이름은 {name} <br />
      children 값은 {children}
      다
      <br />
      내가 좋아하는 숫자는 {favoriteNumber} 다
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
