import React from "react";
import Image from "next/image";
import { Sign } from "crypto";
import SignUpForm from "./components/SignUpForm";
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
          Start <span className="text-blue-600 ">Here</span>
        </h2>
        <SignUpForm />
        <div className="text-sm text-gray-400">
          Already have an account ?{" "}
          <a
            href="/login"
            className="font-semibold text-gray-800 cursor-pointer"
          >
            Log In
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
