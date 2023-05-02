import React from "react";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Sign } from "crypto";

export default function Login() {
  return (
    <>
      <Header />
      <SignIn />
      <Footer />
    </>
  );
}
