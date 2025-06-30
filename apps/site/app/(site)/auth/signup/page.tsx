import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Data Oculus",
  description: "This is Sign Up page for Data Oculus",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
