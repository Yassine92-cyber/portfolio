"use client";

import { Toaster } from "react-hot-toast";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{ top: 80 }}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#171A24",
          color: "#F6F4F0",
          border: "1px solid rgba(246, 244, 240, 0.12)",
          borderRadius: "0.875rem",
          padding: "12px 16px",
          fontSize: "0.9375rem",
        },
        success: {
          iconTheme: {
            primary: "#9286FF",
            secondary: "#090B10",
          },
          style: {
            border: "1px solid rgba(146, 134, 255, 0.35)",
          },
        },
        error: {
          iconTheme: {
            primary: "#E4ABAE",
            secondary: "#090B10",
          },
          style: {
            border: "1px solid rgba(228, 171, 174, 0.4)",
          },
        },
        loading: {
          iconTheme: {
            primary: "#9286FF",
            secondary: "#171A24",
          },
        },
      }}
    />
  );
}
