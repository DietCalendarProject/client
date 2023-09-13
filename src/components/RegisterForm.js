import useInput from "../hooks/useInput";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const RegisterForm = (props) => {
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
  const {
    value: enteredCheckPassword,
    isValid: enteredCheckPasswordIsValid,
    hasError: checkPasswordInputHasError,
    valueChangeHandler: checkPasswordChangeHandler,
    inputBlurHandler: checkPasswordBlurHandler,
    reset: resetCheckPasswordInput,
  } = useInput((value) => value === enteredPassword);
  const {
    value: enteredWeight,
    isValid: enteredWeightIsValid,
    hasError: weightInputHasError,
    valueChangeHandler: weightChangeHandler,
    inputBlurHandler: weightBlurHandler,
    reset: resetWeightInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredHeight,
    isValid: enteredHeightIsValid,
    hasError: heightInputHasError,
    valueChangeHandler: heightChangeHandler,
    inputBlurHandler: heightBlurHandler,
    reset: resetHeightInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredCheckPasswordIsValid &&
    enteredWeightIsValid &&
    enteredHeightIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmailInput();
    resetPasswordInput();
    resetCheckPasswordInput();
    resetWeightInput();
    resetHeightInput();
  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";
  const checkPasswordInputClasses = checkPasswordInputHasError
    ? "form-control invalid"
    : "form-control";
  const weightInputClasses = weightInputHasError
    ? "form-control invalid"
    : "form-control";
  const heightInputClasses = heightInputHasError
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

      <div className={checkPasswordInputClasses}>
        <label htmlFor="check-password">Verify Password</label>
        <input
          type="password"
          id="check-password"
          onChange={checkPasswordChangeHandler}
          onBlur={checkPasswordBlurHandler}
          value={enteredCheckPassword}
        />
        {checkPasswordInputHasError && (
          <p className="error-text">비밀번호가 다릅니다.</p>
        )}
      </div>
      <div className={weightInputClasses}>
        <label htmlFor="weight">Your Weight</label>
        <input
          type="number"
          id="weight"
          onChange={weightChangeHandler}
          onBlur={weightBlurHandler}
          value={enteredWeight}
        />
        {weightInputHasError && (
          <p className="error-text">몸무게를 입력해주세요.</p>
        )}
      </div>
      <div className={heightInputClasses}>
        <label htmlFor="height">Your Height</label>
        <input
          type="number"
          id="height"
          onChange={heightChangeHandler}
          onBlur={heightBlurHandler}
          value={enteredHeight}
        />
        {heightInputHasError && (
          <p className="error-text">키를 입력해주세요.</p>
        )}
      </div>

      <div className="form-actions">
        <Link to="/">
          <button disabled={!formIsValid}>Submit</button>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
