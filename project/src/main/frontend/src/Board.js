import React, { useState, Component, Fragment } from "react";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu1: this.props.menu1,
      menu2: this.props.menu2,
      boardType: this.props.boardType,
      boardData: {
        id: "",
        title: "",
        contents: "",
        fname: "",
      },
    };
  }

  componentDidMount() {
    console.log("----------board componentDidMount : " + this.props.boardType);
  }

  componentWillUnmount() {
    console.log("========Board componentWillUnmount");
  }

  render() {
    //console.log('===Board render:'+this.props.boardType);
    //console.log("menu1:"+this.state.menu1);
    //console.log("menu2:"+this.state.menu2);
    return (
      <div className="card">
        <h1>react board</h1>
        <div className="card-header">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={"nav-link " + (this.state.menu1 ? "active" : "")}
                onClick={this.menuClick}
              >
                싱글이미지 게시판
              </a>
            </li>
            <li className="nav-item">
              <a
                className={"nav-link " + (this.state.menu2 ? "active" : "")}
                onClick={this.menuClick2}
              >
                멀티이미지 게시판
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <List
                key={this.state.boardType}
                boardType={this.state.boardType}
                onCreate={this.handleCreate}
              />
            </div>
            <div className="col-lg-5">
              <Detail
                key={this.state.boardType + this.state.boardData.id}
                id={this.state.boardData.id}
                title={this.state.boardData.title}
                contents={this.state.boardData.contents}
                date={this.state.boardData.date}
                fname={this.state.boardData.fname}
                boardType={this.state.boardType}
                onCreate={this.handleCreate2}
              />
            </div>
            <div className="col-lg-3">
              <Image
                key={
                  this.state.boardType +
                  this.state.boardData.id +
                  this.state.boardData.fname
                }
                boardType={this.state.boardType}
                fname={this.state.boardData.fname}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          SpringBoot + MongoDB + <strong>React</strong> + bootstrap4 게시판
          만들기
        </div>
      </div>
    );
  }
}

class List extends Component {
  render() {
    const divStyle = {
      minHeight: "500px",
      maxHeight: "500px",
      overflowY: "auto",
    };

    return (
      <div className="card" style={divStyle}>
        <table className="table">
          <thead>
            <tr>
              <th>게시물 리스트</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                        <td>게시물 1</td>
                    </tr>
                    <tr>
                        <td>게시물 2</td>
                    </tr> */}
            {this.state.boardList}
          </tbody>
        </table>
      </div>
    );
  }
}

class Detail extends Component {
  render() {
    const divStyle = {
      minHeight: "500px",
      maxHeight: "1000px",
    };
    const divCenter = {
      textAlign: "center",
    };

    return (
      <div className="card bg-light text-dark" style={divStyle}>
        <form name="form1" action="">
          <div className="form-group">
            <label className="control-label">제목:</label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="제목을 입력하세요"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">내용:</label>
            <div>
              <textarea className="form-control" rows="10"></textarea>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label">이미지첨부: jpg,gif,png</label>
            <div>
              <input type="file" className="form-control" name="file" />
            </div>
          </div>
          <input type="hidden" name="id" />
        </form>
        <div style={divCenter}>
          <div className="btn-group">
            <button type="button" className="btn btn-primary">
              저장
            </button>
            <button type="button" className="btn btn-secondary">
              취소
            </button>
            <button type="button" className="btn btn-danger">
              삭제
            </button>
            <button type="button" className="btn btn-info">
              그림삭제
            </button>
          </div>
        </div>
      </div>
    );
  }
}
class Image extends Component {
  render() {
    const divStyle1 = {
      minHeight: "500px",
      maxHeight: "500px",
      overflowY: "auto",
      display: "block",
    };
    const divStyle1_1 = {
      minHeight: "500px",
      maxHeight: "1000px",
      display: "none",
    };
    const divStyle2 = {
      minHeight: "500px",
      maxHeight: "500px",
      overflowY: "auto",
      display: "block",
    };
    const divStyle2_1 = {
      minHeight: "500px",
      maxHeight: "1000px",
      display: "none",
    };
    const imgStyle = {
      width: "100%",
    };

    return (
      <Fragment>
        <div className="card bg-light text-dark">
          <img alt="image"></img>
        </div>
        <div className="card bg-light text-dark">
          <span></span>
        </div>
      </Fragment>
    );
  }
}

export default Board;
