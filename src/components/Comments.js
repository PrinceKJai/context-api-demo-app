import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoConext";

export default function Comments() {
  const userData = useContext(UserInfoContext);
  return (
    <>
      <div>Comments</div>
      <div>Logged in as: {userData.userName}</div>
    </>
  );
}
