import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import DashboardNav from "./components/DashboardSideNav";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/");
  }

  return (
    <div className="mt-10 flex flex-col space-y-6">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
