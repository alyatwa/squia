import { ReactNode } from "react";
import { Id, ToastContainer, ToastOptions, TypeOptions } from "react-toastify";
import { toast } from "./ui/use-toast";

export type TNotification = {
  title?: string;
  text: ReactNode;
};

export const NotificationContent = ({ title, text }: TNotification) => {
  return (
    <div className="msg-container">
      {title && <div className="text-md mb-1 font-medium">{title}</div>}
      <div className={title ? "text-sm" : "text-md"}>{text}</div>
    </div>
  );
};

export const createNotification = (
  myProps: TNotification & { type?: TypeOptions },
  toastProps: ToastOptions = {}
) =>
  toast({
    title: myProps.title,
    description: myProps.text,
  });

export const NotificationContainer = () => (
  <ToastContainer
    pauseOnHover
    toastClassName="border border-mineshaft-500"
    style={{ width: "400px" }}
  />
);
