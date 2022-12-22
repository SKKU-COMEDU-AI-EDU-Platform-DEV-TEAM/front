import { Component } from "react";
import EnterLayout from "../components/layout/login/EnterLayout";
import { Login } from "../components/layout/login/Login";
import { Signup } from "../components/layout/login/Signup";
export default function Home() {
  return (
    <EnterLayout>
      <Signup />
    </EnterLayout>
  );
}
