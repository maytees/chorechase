import { validateRequest } from "@/auth";
import Navbar from "./components/Navbar";
import { redirect } from "next/navigation";
import Hero from "./components/Hero";

export default async function Home() {
  const { user } = await validateRequest();
  if (user) {
    redirect("/chores");
  }
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
