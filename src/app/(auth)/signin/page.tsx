"use client";
import Link from "next/link";
import ButtonSubmit from "../../_components/ButtonSubmit";
import { useFormState } from "react-dom";
import signInUser from "app/actions/Auth/singInUser";

const signIn = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    signInUser,
    { message: null },
  );
  return (
    <form
      action={action}
      className="mt-14 flex h-96 w-80 flex-col items-center rounded-lg border-2 border-ligh-gray shadow-lg"
    >
      <h2 className="mt-1 text-3xl font-bold text-principal-color">Sing in</h2>

      <div className="mt-5 px-10">
        <label className="font-semibold text-text-color">Email:</label>
        <input
          className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
          placeholder="youremail@hotmail.com"
          name="email"
          type="text"
          required
        />
      </div>

      <div className="mt-5 px-10">
        <label className="font-semibold text-text-color">Password:</label>
        <input
          className="mt-2 h-8 rounded-lg border-2 border-principal-color p-2 text-text-color outline-none"
          placeholder="*******"
          name="password"
          type="password"
          required
        />
      </div>

      <div className="mt-4 flex h-auto w-64 items-center justify-center">
        <ButtonSubmit label="Sing in" />
      </div>

      <div className="mt-2">
        <Link href={"/signin"}>
          <p className="text-center text-sm font-semibold text-principal-color">
            ¿Forgot password?
          </p>
        </Link>
        <Link href={"/signup"}>
          <p className="mt-4 text-center text-sm font-semibold text-principal-color">
            ¿Dont have account?
          </p>
        </Link>
      </div>
    </form>
  );
};

export default signIn;
