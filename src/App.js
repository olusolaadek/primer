import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';

const message = "Welcome to React Primer";
//const count = 5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4
    };
  }
  isEven() {
    return this.state.count % 2 === 0 ? 'Even' : 'Odd';
  }
  getClassName(val) {
    return val % 2 === 0 ? 'bg-primary text-white text-center p-2 m-1' :
      'bg-secondary text-white text-center p-2 m-1'
  }
  handleClick = () => this.setState({
    count: this.state.count + 1
  });
  render = () =>
   <div>
   <table className="table table-striped table-bordered table-sm">
      <thead className="bg-info text-white">
        <tr><th>Value</th><th>Even?</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.count}</td>
          <td>{this.isEven(this.state.count)}</td>
        </tr>
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan="2">
            <button className="btn btn-info m-2" onClick={this.handleClick}>Click Me</button>
          </td>
        </tr>
      </tfoot>
    </table>
    <div className="m-2">
      <h4>This is my form</h4>

      <div className="form-group">
        <label>Name: </label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group text-center">
        <button className="btn btn-info">Submit</button>
      </div>
    </div>
</div>
} 
