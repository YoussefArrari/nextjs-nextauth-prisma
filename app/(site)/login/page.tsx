import React from "react";
import Image from "next/image";
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
        <h2 className="text-4xl font-semibold">
          Welcome <span className="text-blue-600">Back</span>
        </h2>
        <div className=" flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="p-3 w-80 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 w-80 rounded-lg"
          />
        </div>
        <button className="w-80 bg-stone-950 rounded-lg text-gray-50 text-lg font-semibold p-4">
          Log In
        </button>
        <div className="relative w-80 flex items-center gap-2">
          <div className="w-full h-0 border border-b-gray-300"></div>
          <div className="text-sm text-gray-400">
            Or&nbsp;Continue&nbsp;with{" "}
          </div>
          <div className="w-full border h-0 border-b-gray-300"></div>
        </div>
        <button className="w-80 bg-gray-50  rounded-lg text-stone-950 text-lg font-semibold p-4 flex justify-center items-center gap-2">
          <Image
            src="Google.svg"
            className="dark:invert "
            alt="Google Icon"
            width={18}
            height={18}
          />
          Google
        </button>
        <div className="text-sm text-gray-400">
          Does not have an account ?{" "}
          <span className="font-semibold text-gray-800 cursor-pointer">
            Sign Up
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
