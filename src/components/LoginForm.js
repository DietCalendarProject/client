import useInput from "../hooks/useInput";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const LoginForm = (props) => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== ""); // todo password 조건

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmailInput();
    resetPasswordInput();
  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className={passwordInputClasses}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <p className="error-text">please enter a valid password</p>
        )}
      </div>
      <div className="form-actions">
        <Button to="/calendar" disabled={!formIsValid} title="LOGIN" />
      </div>
    </form>
  );
};

export default LoginForm;
