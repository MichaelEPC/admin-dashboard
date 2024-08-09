"use client";

import React from "react";
import Link from "next/link";
import ButtonSubmit from "../../_components/ButtonSubmit";
import style from "./style.module.css";
import { useFormState } from "react-dom";
import registerUser from "app/actions/Auth/regiserUser";

const signIn = () => {
  const [rol, setRol] = React.useState("employee");
  const [formState, action] = useFormState<{ message: string | null }>(
    registerUser,
    { message: null },
  );
  return (
    <form
      action={action}
      className={`mt-14 flex h-auto flex-col items-center rounded-lg border-2 border-ligh-gray py-4 shadow-lg ${style.formContainer}`}
    >
      <h2 className="mt-2 text-3xl font-bold text-principal-color">
        Create account
      </h2>

      <div className="mt-2 flex h-auto w-full flex-col px-10">
        <label className="font-semibold text-text-color">Email:</label>
        <input
          className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
          name="email"
          type="email"
          required
        />
      </div>

      <div className="mt-2 flex h-auto w-full flex-col px-10">
        <label className="font-semibold text-text-color">Name:</label>
        <input
          className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
          name="name"
          type="text"
          required
        />
      </div>

      <div className="mt-2 flex h-auto w-full flex-col px-10">
        <label className="font-semibold text-text-color">Cellphone:</label>
        <input
          className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
          name="cellphone"
          type="number"
          required
          maxLength={14}
        />
      </div>

      <div className="mt-2 flex h-auto w-full flex-col px-10">
        <label className="font-semibold text-text-color">Password:</label>
        <input
          className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
          name="password"
          type="password"
          required
        />
      </div>

      <div className="mt-2 flex h-auto w-full flex-col px-10">
        <label className="font-semibold text-text-color">
          Rol on the company:
        </label>
        <select
          className="mt-2 h-12 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
          name="rol"
          onChange={(e) => setRol(e.target.value)}
          required
        >
          <option value="employee">Employee</option>
          <option value="owner">Owner</option>
        </select>
      </div>

      {rol === "owner" ? (
        <>
          <div className="mt-2 flex h-auto w-full flex-col px-10">
            <label className="font-semibold text-text-color">
              Company Name:
            </label>
            <input
              className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
              name="companyName"
              type="text"
              required
            />
          </div>

          <div className="mt-2 flex h-auto w-full flex-col px-10">
            <label className="font-semibold text-text-color">
              Company Category:
            </label>
            <input
              className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
              name="companyCategory"
              type="text"
              required
            />
          </div>
        </>
      ) : (
        ""
      )}

      <div className="mt-4 flex h-auto w-64 items-center justify-center">
        <ButtonSubmit label="Sing up" />
      </div>

      <div className="mt-2">
        <Link href={"/signin"}>
          <p className="text-center text-sm font-semibold text-principal-color">
            ¿Already have account?
          </p>
        </Link>
      </div>
    </form>
  );
};

export default signIn;
