import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = async () => {
  const { user } = await validateRequest();
  if (user) {
    redirect("/chores");
  }
  return <LoginForm />;
};

export default LoginPage;
