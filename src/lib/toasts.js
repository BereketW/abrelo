import { toast } from "react-toastify";

export function showToastMessage(){
    toast.success("Product added to cart !", {
      position: "top-right"
    })
}
export function warningToast(){
    toast.error("Product already in cart")
}