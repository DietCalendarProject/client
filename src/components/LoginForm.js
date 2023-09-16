import useInput from "../hooks/useInput";

import "./LoginForm.css";

import LoginButton from "../pages/login/LoginButton";
import ErrorText from "./ErrorText";
import EmailInput from "../pages/login/EmailInput";

const LoginForm = (props) => {
  const {
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
    ...emailInputObject
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
  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <EmailInput emailInputObject={emailInputObject} />
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
          <ErrorText text="please enter a valid password" />
        )}
      </div>
      <LoginButton $formIsValid={formIsValid} />
    </form>
  );
};

export default LoginForm;
