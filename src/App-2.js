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
        <div className="container-fluid p-4">
            {/* <div className="row">
        <div className="col-12"><h4 className='bg-primary text-white text-center p-2'>
          {message}
        </h4></div>

      </div> */}
            <div className="row bg-info text-white p-2">
                <div className="col font-weight-bold">Value</div>
                <div className="col-6 font-weight-bold">Even?</div>
            </div>
            <div className="row bg-light p-2 border">
                <div className="col ">{this.state.count}</div>
                <div className="col-6">{this.isEven(this.state.count)}</div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-info m-2" onClick={this.handleClick}>Click Me</button></div>
            </div>


        </div>
} 
