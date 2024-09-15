// import Dashboard from "@app/client/components/user/Dashboard";
import Dashboard from "@/components/Dashboard";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function page() {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={true} >

  <Dashboard />
  </ThemeProvider>);
}
