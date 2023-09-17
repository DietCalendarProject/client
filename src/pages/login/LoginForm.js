import useInput from "../../hooks/useInput";

import LoginButton from "./LoginButton";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const LoginForm = (props) => {
  const {
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
    ...emailInputObject
  } = useInput((value) => value.includes("@"));

  const {
    isValid: enteredPasswordIsValid,
    reset: resetPasswordInput,
    ...passwordInputObject
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

  return (
    <form onSubmit={formSubmissionHandler}>
      <EmailInput emailInputObject={emailInputObject} />
      <PasswordInput passwordInputObject={passwordInputObject} />
      <LoginButton $formIsValid={formIsValid} />
    </form>
  );
};

export default LoginForm;
