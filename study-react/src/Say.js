import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안뇽');
  const onClickLeave = () => setMessage('잘가유');

  //3.4.2.3 여러번 사용
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장 </button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {/* 3.4.2.3 */}
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색~
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색~
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색~~
      </button>
    </div>
  );
};
export default Say;
