import React from "react";
import ReactDOM from "react-dom";
import './SignUp.css'

// https://goshacmd.com/instant-form-fields-validation-react/

function validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0
  };
}

export default class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",

      touched: {
        email: false,
        password: false
      }
    };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleBlur = field => e => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = e => {
    if (!this.canBeSubmitted()) {
      e.preventDefault();
      return;
    }
    const { email, password } = this.state;
    console.log(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={shouldMarkError("email") ? "error" : ""}
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          onBlur={this.handleBlur("email")}
        />
        <input
          className={shouldMarkError("password") ? "error" : ""}
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          onBlur={this.handleBlur("password")}
        />
        <button disabled={isDisabled}>Sign up</button>
      </form>
    );
  }
}
