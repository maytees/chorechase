import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import RegisterForm from "./RegisterForm";
import Navbar from "@/app/components/Navbar";

const RegisterPage = async () => {
  const { user } = await validateRequest();
  if (user) {
    redirect("/chores");
  }
  return (
    <div>
      <Navbar />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
