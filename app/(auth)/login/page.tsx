import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import LoginForm from "./LoginForm";
import Navbar from "@/app/components/Navbar";

const LoginPage = async () => {
  const { user } = await validateRequest();
  if (user) {
    redirect("/chores");
  }
  return (
    <div>
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
