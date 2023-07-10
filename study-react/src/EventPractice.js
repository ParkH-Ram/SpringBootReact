import React, { Component } from 'react';

class EventPractice extends Component {
  // 4.2.2.2
  state = {
    message: '',
  };

  // 4.2.3.1
  /*  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  } */

  // 4.2.3.2
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        {/* 4.2.2.1 
         <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        /> */}

        {/* 4.2.2.2 */}
        {/*  <input
          type="text"
          name="message"
          placeholder="아무거나"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
            console.log(e.target.value);
          }}
        /> */}

        {/* 4.2.2.3  */}
        {/*   <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
      </div> */}

        {/* 4.2.3.1 */}
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
