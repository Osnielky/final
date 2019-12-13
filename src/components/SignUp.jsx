import React, { Component } from "react";
import '../../src/App.css';
import { Link } from 'react-router-dom';






export default class SignUp extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: data,
        });

        console.log(data)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    <Link to="/album">
                        Already registered <a href="#">sign in?</a>
                    </Link>
                </p>
            </form>
        );
    }
}

