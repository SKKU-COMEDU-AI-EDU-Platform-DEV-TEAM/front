import { Component } from "react";
import EnterLayout from "../components/layout/login/EnterLayout";
import { Login } from "../components/layout/login/Login";
export default function Home() {
  return (
    <EnterLayout>
      <Login />
    </EnterLayout>
  );
}
