"use server";
import { lucia } from "@/auth";
import db from "@/lib/db";
import { loginSchema } from "@/lib/validation";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function register(
  values: z.infer<typeof loginSchema>,
): Promise<ActionResult> {
  "use server";

  const fields = loginSchema.safeParse(values);

  if (!fields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const { username, password } = fields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const userExists = await db.user.findFirst({
    where: {
      username,
    },
  });

  if (userExists && userExists.username === username) {
    return {
      error: "Username already exists.",
    };
  }

  const newUser = await db.user.create({
    data: {
      username,
      password_hash: hashedPassword,
    },
  });

  if (!newUser) {
    return {
      error: "Something went wrong when creating user!",
    };
  }

  const session = await lucia.createSession(newUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  redirect("/chores");
}

interface ActionResult {
  error: string;
}
