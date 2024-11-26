"use client";

import React, { useEffect } from "react";
import { isUserLog } from "app/actions/Auth/CheckUserSingIn";

const NameUser = () => {
  const [name, setName] = React.useState("");

  useEffect(() => {
    const getUser = async () => {
      const user = await isUserLog();
      // @ts-expect-error
      setName(user?.name);
    };

    getUser();
  }, []);

  return <p className="ml-1 font-semibold text-text-color">{name}</p>;
};

export default NameUser;
