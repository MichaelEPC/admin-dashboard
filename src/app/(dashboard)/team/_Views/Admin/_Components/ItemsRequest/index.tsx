"use client";

import { acceptJoinRequestAction } from "app/actions/Company/AcceptJoinRequest";
import { denyJoinRequestAction } from "app/actions/Company/DenyJoinRequest";
import style from "./style.module.css";

const ItemsRequest = ({
  companyId,
  userId,
  name,
  email,
}: {
  companyId: string;
  userId: string;
  name: string;
  email: string;
}) => {
  return (
    <article className="mt-2 flex h-12 w-full flex-row items-center justify-around rounded-lg border-2 border-ligh-gray shadow-md">
      <div className="flex h-auto justify-center">
        <svg
          className="h-10 w-10 fill-test-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
        </svg>
      </div>
      <p className="text-lg font-semibold text-black">{name}</p>
      <p className="hidden text-lg font-semibold text-principal-color md:block">
        {email}
      </p>
      <div className="flex">
        <div
          className={`duration-400 cursor-pointer rounded-lg transition-all ${style.checkBox}`}
          onClick={() => {
            acceptJoinRequestAction(companyId, userId);
          }}
        >
          <svg
            className={`h-12 w-12 ${style.checkBoxSvg}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
          </svg>
        </div>
        <div
          className={`duration-400 cursor-pointer rounded-lg transition-all ${style.deleteBox}`}
          onClick={() => {
            denyJoinRequestAction(companyId, userId);
          }}
        >
          <svg
            className={`h-12 w-12 ${style.deleteSvg}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </div>
      </div>
    </article>
  );
};

export default ItemsRequest;
