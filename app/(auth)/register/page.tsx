import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import RegisterForm from "./RegisterForm";

const RegisterPage = async () => {
  const { user } = await validateRequest();
  if (user) {
    redirect("/chores");
  }
  return <RegisterForm />;
};

export default RegisterPage;
