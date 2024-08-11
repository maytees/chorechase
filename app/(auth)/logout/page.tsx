import { validateRequest } from "@/auth";
import LogoutButton from "@/components/LogoutButton";
import { redirect } from "next/navigation";
import React from "react";

const LogoutPage = async () => {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }

  return <LogoutButton />;
};

export default LogoutPage;
