"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
// import Input from "../shared/textFields/InputFieldCompact";
import { zodResolver } from "@hookform/resolvers/zod";
// import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Input } from "../ui/input";
import InputFieldCompact from "../shared/InputFieldCompact";
// import { signUpDataSchema } from "@/lib/schemas";
// import { signUpFormValues } from "@/lib/types";
// import { useRegister } from "@/hooks/useRegister";
// import { useAuthStore } from "@/store/authStore";

function SignUp() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      mobile_number: "0123456789",
      email: "",
      password: "",
      confirm_password: "",
    },
  });
  // const { setUserData } = useAuthStore();

  // const { mutate: registerMutation, isPending, isError } = useRegister();

  // const onSubmit: SubmitHandler<signUpFormValues> = async (data) => {
  //   registerMutation(data, {
  //     onSuccess: (values) => {
  //       setUserData({
  //         email: data.email,
  //         userId: values.user,
  //       });
  //       reset();
  //       router.push(`/?auth=verify-signup-otp`);
  //     },
  //     onError: (error) => {
  //       setErrorMsg(error.message);
  //     },
  //   });
  // };

  return (
    <div className="my-1 flex max-h-screen flex-col items-center gap-3 overflow-y-scroll px-2">
      <h2 className="font-helveticaNeue text-2xl font-bold text-black-500">
        Welcome to Travello
      </h2>
      <span className="text-center font-helvetica">
        Create an account or log in to book a trip or <br />
        packages
      </span>
      <form
        className="flex w-full flex-col gap-2 font-helvetica"
        onSubmit={handleSubmit((e) => console.log(e))}
      >
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          <InputFieldCompact
            id="first_name"
            name="first_name"
            type="text"
            inputMode="text"
            label="First Name"
            placeholder=" "
            register={register}
            errorMessage={errors.first_name ? errors.first_name.message : ""}
          />
          <InputFieldCompact
            id="last_name"
            name="last_name"
            type="text"
            inputMode="text"
            label="Last Name"
            placeholder=" "
            register={register}
            errorMessage={errors.last_name ? errors.last_name.message : ""}
          />
        </div>

        <InputFieldCompact
          id="email"
          name="email"
          type="text"
          inputMode="text"
          label="Enter email address"
          placeholder=" "
          register={register}
          errorMessage={errors.email ? errors.email.message : ""}
        />
        <InputFieldCompact
          id="password"
          name="password"
          type="password"
          inputMode="text"
          label="Enter your password"
          placeholder=""
          register={register}
          errorMessage={errors.password ? errors.password.message : ""}
        />
        <InputFieldCompact
          id="confirm_password"
          name="confirm_password"
          type="password"
          inputMode="text"
          label="Confirm password"
          placeholder=""
          register={register}
          errorMessage={
            errors.confirm_password ? errors.confirm_password.message : ""
          }
        />
        <p className="text-xs text-black-400">
          By clicking Agree and continue, I accept Avitane&#39;s{" "}
          <Link href="#" className="underline">
            Terms of Service
          </Link>
          ,{" "}
          <Link href="/#" className="underline">
            Payments Terms
          </Link>
          , and{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
        {/* {isError && (
          <div className="text-center font-helvetica text-sm text-red-500">
            {errorMsg ? errorMsg : "Invalid username or password"}
          </div>
        )} */}
      </form>
    </div>
  );
}

export default SignUp;
