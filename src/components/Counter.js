import { Component, useRef } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  updateNumber(toAdd) {
    this.setState((prevState) => ({
      number: prevState.number + toAdd
    }));
  }

  render() {
    return (
      <div className="number-container">
        <span className="number">{this.state.number}</span>
        <Controls
          increase={() => this.updateNumber(1)}
          decrease={() => this.updateNumber(-1)}
        />
      </div>
    );
  }
}

function Controls({ increase, decrease }) {
  //useRef will not trigger re-render
  const intervalId = useRef(0);

  const startIncrease = () => {
    if (intervalId.current) return;

    intervalId.current = setInterval(() => {
      increase();
    }, 1000);
  };

  const stopIncrease = function () {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = 0;
    }
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={startIncrease}>Start</button>
      <button onClick={stopIncrease}>Stop</button>
    </div>
  );
}

export default Counter;
