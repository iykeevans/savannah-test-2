import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "../services";

import CustomInput from "./custom-input";

const SigninForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      await signInWithEmailAndPassword(auth, user.email, user.password);
      toast.success("Successfully signed in 🔥");

      router.push("todos");
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 mb-5">
        Welcome Back 👋
      </h1>

      <p className="text-gray-700 mb-10">
        Today is a new day. It&apos;s your day. you shape it. Sign in to start
        managing your projects.
      </p>

      <div className="mb-4">
        <CustomInput
          label="Email"
          placeholder="Example@email.com"
          onChange={({ target }) =>
            setUser((state) => ({ ...state, email: target.value }))
          }
        />
      </div>

      <CustomInput
        type="password"
        label="Password"
        placeholder="At least 8 characters"
        onChange={({ target }) =>
          setUser((state) => ({ ...state, password: target.value }))
        }
      />

      <div className="flex justify-end text-sm text-blue-600 font-medium py-4">
        <button>Forgot Password?</button>
      </div>

      <button
        className={`bg-gray-900 text-white w-full h-[44px] rounded-xl ${
          isSubmitting ? "cursor-not-allowed !bg-gray-500" : ""
        }`}
        disabled={isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>

      <div className="relative my-8">
        <div className="w-full h-[1px] bg-gray-100"></div>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white px-3 text-sm text-gray-600">
          Or
        </div>
      </div>

      <button className="w-full h-[44px] bg-[#F3F9FA] text-sm text-gray-500 font-medium rounded-xl flex items-center pl-[94px] gap-x-1">
        <Image src="/icons/google.svg" alt="google" width="36" height="36" />
        Sign in with Google
      </button>

      <button className="w-full h-[44px] bg-[#F3F9FA] text-sm text-gray-500 font-medium rounded-xl flex items-center pl-[100px] gap-x-2 mt-4">
        <Image src="/icons/facebook.svg" alt="google" width="24" height="24" />
        Sign in with facebook
      </button>

      <div className="text-center text-sm text-gray-700 mt-10">
        Don&apos;t you have an account?{" "}
        <button
          className="text-blue-700 font-medium"
          onClick={() => router.push("?action=signup")}
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default SigninForm;
