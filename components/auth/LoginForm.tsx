"use client";

import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { setSession } from "@/app/actions/setSession";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import InputFieldCompact from "../shared/InputFieldCompact";

interface LoginFormValues {
  username_or_email_or_mobile: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      username_or_email_or_mobile: "",
      password: "",
    },
    // resolver: zodResolver(loginDataSchema),
  });
  // const { mutate: loginMutation, isPending, isError } = useLogin();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data, event) => {
    event?.preventDefault();
    // loginMutation(
    //   { route: "login", loginData: data },
    //   {
    //     onSuccess: (user) => {
    //       setSession(user);
    //       reset();
    //       toast.success("You have been logged in successfully");
    //     },
    //   }
    // );
  };

  return (
    <div className="my-4 flex max-h-screen flex-col items-center gap-3 overflow-y-scroll px-2">
      <h2 className="font-helveticaNeue text-2xl font-bold text-black-500">
        Welcome to Travello
      </h2>
      <span className="text-center font-helvetica">
        Create an account or log in to book a trip or <br />
        packages
      </span>
      <form
        className="flex w-full flex-col gap-2 font-helvetica"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputFieldCompact
          id="mail_or_phone"
          name="username_or_email_or_mobile"
          type="text"
          inputMode="text"
          label="Enter your email address"
          placeholder=" "
          register={register}
          errorMessage={
            errors.username_or_email_or_mobile
              ? errors.username_or_email_or_mobile.message
              : ""
          }
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
        {/* {isError && (
          <div className="text-center font-helvetica text-sm text-red-500">
            Invalid username or password
          </div>
        )} */}
        <Button disabled={false} type="submit" className="rounded-md">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
