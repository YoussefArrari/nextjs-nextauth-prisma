import React from "react";
import Image from "next/image";
import SignInForm from "./components/SignInForm";
import { Sign } from "crypto";
const page = () => {
  return (
    <div className="lg:h-screen h-fit w-screen flex items-center justify-center flex-col">
      <div className="w-[70%] max-w-7xl h-fit ">
        <a href="/">
          {" "}
          <Image
            src="/Arrow.svg"
            className="dark:invert"
            alt="go back Icon"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div className="w-[60%]  h-[60%] flex flex-col items-center gap-8">
        <h2 className="text-4xl font-bold">
          Welcome <span className="text-blue-600 ">Back</span>
        </h2>
        <SignInForm />
        <div className="text-sm text-gray-400">
          Does not have an account ?{" "}
          <a
            href="/signup"
            className="font-semibold text-gray-800 cursor-pointer"
          >
            Sign Up
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
