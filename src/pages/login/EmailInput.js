import ErrorText from "../../components/ErrorText";
import Input from "../../UI/Input";

const EmailInput = ({
  emailInputObject: {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  },
}) => {
  return (
    <>
      <Input
        label="Email"
        id="email"
        type="email"
        hasError={emailInputHasError}
        onChange={emailChangeHandler}
        onblur={emailBlurHandler}
        value={enteredEmail}
      />
      {emailInputHasError && <ErrorText text="Please enter a valid email." />}
    </>
  );
};

export default EmailInput;
