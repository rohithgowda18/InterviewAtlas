import { Metadata } from "next";
import Atlas150Content from "@/components/atlas150/Atlas150Content";

export const metadata: Metadata = {
  title: "Interview Atlas 150 — Top 150 Coding Interview Questions",
  description:
    "Master the top 150 most frequently asked coding interview questions ranked across 470+ companies for maximum interview coverage.",
};

export default function Atlas150Page() {
  return <Atlas150Content />;
}
