// 0225 課堂: 類別型元件生命週期方法
import React from 'react';
class CCLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = { total: 0 };
    console.log('constructor');
  }

  // DidMount
  componentDidMount() {
    console.log('componentDidMount');
  }

  // DidUpdate
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // WillUnMount 父層才有辦法移除掉子元件
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h1>
      </>
    );
  }
}

export default CCLifeCycle;
