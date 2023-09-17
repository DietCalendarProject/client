import ErrorText from "../../components/ErrorText";

const EmailInput = ({
  emailInputObject: {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  },
}) => {
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={emailInputClasses}>
      <label htmlFor="email">Your E-Mail</label>
      <input
        type="email"
        id="email"
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={enteredEmail}
      />
      {emailInputHasError && <ErrorText text="Please enter a valid email." />}
    </div>
  );
};

export default EmailInput;
