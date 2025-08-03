"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import AdminHeaderComponent from "../components/admin/admin_header";

export default function AdminHomePage() {
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(async (data) => {
        const jsonData = await data.json();
      });
    }
  }, []);

  return (
    <div>
      <AdminHeaderComponent />
    </div>
  );
}
