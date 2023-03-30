"use client";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { getData } from "@/service/getData";
import Link from "next/link";
import Button from "@/components/atomics/Button";
import { CrazyTitle } from "@/components/atomics/Title";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <CrazyTitle text="Atomic Design" />

      <div className="w-[100%] flex flex-row gap-5 justify-between">
        <Link href={"/study-case/page-atomics"}>
          <Button text="Atomics Components" className="bg-[#F9A826]" />
        </Link>
        <Link href={"/study-case/page-molecules"}>
          <Button text="Molecules Components" className="bg-[#6EB5C0]" />
        </Link>
        <Link href={"/study-case/page-organisms"}>
          <Button text="Organisms Components" className="bg-[#FF4D4F]" />
        </Link>
        <Link href={"/study-case/page-templates"}>
          <Button text="Templates" className="bg-[#48BB78]" />
        </Link>
        <Link href={"/study-case/blog"}>
          <Button text="Page" className="bg-[#9F7AEA]" />
        </Link>
      </div>
    </main>
  );
}
