// import AccountDetail from "@app/client/components/forms/accountDetail";
import AccountDetail from "@/components/accountDetail";
import { ThemeProvider } from "next-themes";
import React from "react";
// import AccountDetail from '../../../components/A'
export default function page() {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={true} >

      <AccountDetail />

    </ThemeProvider>
  );
}
