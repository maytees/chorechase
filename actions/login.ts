"use server";

import db from "@/lib/db";
import { loginSchema } from "@/lib/validation";
import { z } from "zod";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { lucia } from "@/auth";
import { redirect } from "next/navigation";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const fields = loginSchema.safeParse(values);

  if (!fields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { username, password } = fields.data;

  const existingUser = await db.user.findUnique({
    where: {
      username,
    },
  });

  if (!existingUser) {
    return {
      error: "Invalid username or password!",
    };
  }

  const validPassword = bcrypt.compare(password, existingUser.password_hash);

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  redirect("/chores");
};
