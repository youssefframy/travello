"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  redirect(DEFAULT_LOGIN_REDIRECT);
}
