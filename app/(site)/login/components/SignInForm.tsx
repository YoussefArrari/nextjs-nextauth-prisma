"use client";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { signIn } from "next-auth/react";
const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    //Axios call to SignIn
    signIn("credentials", { ...data, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          console.log("Invalid credentials");
        }
        if (callback?.ok && !callback?.error) {
          console.log("Logged in successfully");
        }
      })
      .finally(() => setIsLoading(false));
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          console.log("Invalid credentials");
        }
        if (callback?.ok && !callback?.error) {
          console.log("Logged in successfully");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
        <input
          type="Email"
          {...register("email", { required: true })}
          disabled={isLoading}
          placeholder="Email"
          className={`p-3 w-80 rounded-lg  ${
            isLoading && "opacity-100 cursor-not-allowed"
          } ${errors["email"] && "border-2 border-red-400 "}`}
        />
        <input
          type="password"
          {...register("password", { required: true })}
          disabled={isLoading}
          placeholder="Password"
          className={`p-3 w-80 rounded-lg  ${
            isLoading && "opacity-100 cursor-not-allowed"
          } ${errors["password"] && "border-2 border-red-400 "}`}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-80 bg-stone-950 rounded-lg text-gray-50 text-lg font-semibold p-4 ${
            isLoading && "opacity-80 cursor-not-allowed"
          }`}
        >
          Log In
        </button>
      </form>

      <div className="relative w-80 flex items-center gap-2">
        <div className="w-full h-0 border border-b-gray-300"></div>
        <div className="text-sm text-gray-400">Or&nbsp;Continue&nbsp;with </div>
        <div className="w-full border h-0 border-b-gray-300"></div>
      </div>
      <button
        onClick={() => socialAction("google")}
        className="w-80 bg-gray-50  rounded-lg text-stone-950 text-lg font-semibold p-4 flex justify-center items-center gap-2"
      >
        <Image
          src="Google.svg"
          className="dark:invert "
          alt="Google Icon"
          width={18}
          height={18}
        />
        Google
      </button>
    </>
  );
};

export default SignInForm;
