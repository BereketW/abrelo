// import Addresses from "@app/client/components/user/Addresses";
import Addresses from "@/components/Addresses";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function page() {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={true} >

  <Addresses />
  </ThemeProvider> 
  );
}
