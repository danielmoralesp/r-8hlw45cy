import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {show: false}
    this.show = this.show.bind(this)
  }

  show(e){
    // let result = this.state.show == false ? true : false
    this.setState({
      show: e.target.checked
    })
  }

  render() {
    if (this.state.show == false) {
      return (
        <div className="wrapper">
          <label><input type="checkbox" onChange={this.show}  /> Mostrar información importante</label>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <label><input type="checkbox" onChange={this.show}  /> Mostrar información importante</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      );
    }


  }
}

export default App;
