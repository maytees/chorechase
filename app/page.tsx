import { validateRequest } from "@/auth";
import Navbar from "./components/Navbar";
import { redirect } from "next/navigation";

export default async function Home() {
  const { user } = await validateRequest();
  if (user) {
    redirect("/chores");
  }
  return (
    <>
      <Navbar />
      <div>Welcome to Chore Chase</div>
    </>
  );
}
