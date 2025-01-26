'use client'
import Image from "next/image";
import { Landing } from "@/components/Landing";
import { useEffect } from "react";
import { Header } from "@/components/Header";

export default function Home() {
  useEffect(() => {
    import('jquery');
  }, []);
  return (
    <>
    <Header />
    <Landing />
    </>
  );
}
