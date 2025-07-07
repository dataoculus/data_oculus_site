import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import TeamInfo from "@/components/Team";

export const metadata: Metadata = {
  title: "Team - Data Oculus",
  description: "This is Team page for Data Oculus",
  // other metadata
};

const TeamPage = () => {
  return (
    <div className="pt-40 pb-20">
      <TeamInfo />
    </div>
  );
};

export default TeamPage;