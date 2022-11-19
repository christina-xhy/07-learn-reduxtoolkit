import React, { PureComponent } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./style.css";
import { connect } from "react-redux";

export class App extends PureComponent {
  render() {
    const { counter } = this.props;

    return (
      <div>
        <h2> App Counter : {counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
//默认有做分包，所以文件路径要再写一次,第一个是counter模块
//模块中的counter

export default connect(mapStateToProps)(App);
