import { toast } from "react-toastify";

const toastify = (text = "cart updated successfully", type = "success") => {
  const setting = {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }
  if (type === "error") {
    return toast.error(text, setting);
  }
  
  return toast.success(text, setting);
};

export default toastify;
