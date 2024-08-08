"use client";

import Link from "next/link";
import ButtonSubmit from "../../_components/ButtonSubmit";
import style from "./style.module.css";
import { useFormState } from "react-dom";
import registerUser from "app/actions/Auth/regiserUser";

const signIn = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    registerUser,
    { message: null },
  );
  return (
    <form
      action={action}
      className={`mt-14 flex flex-col items-center rounded-lg border-2 border-ligh-gray shadow-lg ${style.formContainer}`}
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
          required
        >
          <option value="owner">Owner</option>
          <option value="employee">Employee</option>
        </select>
      </div>

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
