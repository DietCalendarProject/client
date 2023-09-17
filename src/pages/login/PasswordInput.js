import ErrorText from "../../components/ErrorText";
import Input from "../../UI/Input";

const PasswordInput = ({
  passwordInputObject: {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  },
}) => {
  return (
    <>
      <Input
        label="Password"
        type="password"
        id="password"
        hasError={passwordInputHasError}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={enteredPassword}
      />
      {passwordInputHasError && (
        <ErrorText text="please enter a valid password" />
      )}
    </>
  );
};

export default PasswordInput;
