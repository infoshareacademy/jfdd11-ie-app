import React, { Component } from 'react';

import './SignIn.css';
import { withAuth } from '../../contexts/AuthContext';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    success: null,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { signIn } = this.props.authContext;
    signIn(this.state.email, this.state.password)
      .then(data =>
        this.setState({ error: null, success: 'Sign in successful' })
      )
      .catch(error => this.setState({ error: error, success: null }));
  };

  render() {
    return (
      <div className="SignUp">
        {this.state.error && (
          <p style={{ color: 'red' }}>{this.state.error.message}</p>
        )}
        {this.state.success && (
          <p style={{ color: 'green' }}>{this.state.success}</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default withAuth(SignIn);
