import React from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { lucia, validateRequest } from "@/auth";
import { ActionResult } from "next/dist/server/app-render/types";

const LogoutButton = async () => {
  async function logout(): Promise<ActionResult> {
    "use server";
    const { session } = await validateRequest();
    if (!session) {
      return {
        error: "Unauthorized",
      };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    return redirect("/login");
  }

  return (
    <div>
      <form action={logout}>
        <Button>Log out</Button>
      </form>
    </div>
  );
};

export default LogoutButton;
