"use client";
import React, { useEffect } from "react";
import { isUserLog } from "app/actions/Auth/CheckUserSingIn";

const NameUser = () => {
  const [name, setName] = React.useState("");
  useEffect(() => {}, []);

  return <p className="ml-1 font-semibold text-text-color">Log in</p>;
};

export default NameUser;
