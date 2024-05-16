"use client";

import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";
import SignUp from "@/components/auth/SignUpForm";

import Modal from "@/components/shared/Modal";

export type authModalsType = "login" | "signup";

export const authModals = ["login", "signup"];
//type guard
function isAuthType(type: string | null): type is authModalsType {
  return type !== null && authModals.includes(type);
}

function AuthModals() {
  const searchParams = useSearchParams();
  const getAuth = isAuthType(searchParams.get("auth") || null)
    ? (searchParams.get("auth") as authModalsType)
    : null;

  const authModalsComponents: {
    [key in authModalsType]: ReactNode;
  } = {
    login: <LoginForm />,
    signup: <SignUp />,
  };

  return <>{getAuth && <Modal open>{authModalsComponents[getAuth]}</Modal>}</>;
}

export default AuthModals;
