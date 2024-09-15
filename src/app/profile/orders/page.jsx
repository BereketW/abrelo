// import Orders from "@app/client/components/user/Orders";
// // import UserOrder from "@app/client/components/user/UserOrder";
// import { getOneOrder } from "@app/client/data/order.service";
// import { getOneProduct } from "@app/client/data/products";
// // import { getOneProduct } from "@app/client/data/products";
// import { getMe } from "@app/client/data/users";
import React from "react";
import UserOrder from "../../../components/UserOrder"
import { ThemeProvider } from "next-themes";
export default  function page() {
  // const user = await getMe();
  const orders = []

  // console.log(orders);
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={true} >

    <div className="flex flex-col">
      <UserOrder orders={orders} />
    </div>
    </ThemeProvider>
  );
}
