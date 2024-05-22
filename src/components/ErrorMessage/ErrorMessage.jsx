import toast, { Toaster } from "react-hot-toast";

export default function ErrorMessage() {
  return toast.error("This is an error!");
}
