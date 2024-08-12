import { ChartSplineIcon, House, LayoutDashboard, Wrench } from "lucide-react";
import React from "react";

export const navItems = [
  { name: "Dashboard", href: "/chores", icon: LayoutDashboard },
  { name: "Chores", href: "/chores/new", icon: Wrench },
  { name: "Analytics", href: "/chores/analytics", icon: ChartSplineIcon },
  { name: "Household", href: "/household", icon: House },
];

const DashboardNavbar = () => {
  return <div></div>;
};

export default DashboardNavbar;
