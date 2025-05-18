import React, { FC } from "react";
import { useUser } from "@/components/contexts/user-context";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const LogOutButton: FC = () => {
  const { logOut } = useUser();

  return (
    <button onClick={() => logOut()} title="Вийти">
      {/* <FontAwesomeIcon icon={faRightToBracket} /> */}
    </button>
  );
};

export default LogOutButton;
