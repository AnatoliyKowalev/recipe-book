import React, { FC, useContext } from "react";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UserContext } from "context/UserContext";

import { signInWithGoogle } from "utils/auth";

const SignInGoogleButton: FC = () => {
  const { synchUserByEmail } = useContext(UserContext);

  const handleLogin = async () => {
    const userLoginData = await signInWithGoogle();

    if (userLoginData) {
      synchUserByEmail(userLoginData.user.email);
    }
  };

  return (
    <button onClick={handleLogin} title="Авторизуватись">
      <FontAwesomeIcon icon={faUserLock} />
    </button>
  );
};

export default SignInGoogleButton;
