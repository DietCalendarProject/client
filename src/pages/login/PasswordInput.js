import ErrorText from "../../components/ErrorText";

const PasswordInput = ({
  passwordInputObject: {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  },
}) => {
  const passwordInputClasses = passwordInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
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
  );
};

export default PasswordInput;
