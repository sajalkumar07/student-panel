"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div
        className={`fixed top-0 right-0 h-16 w-48 ${
          isDarkMode ? "bg-zinc-900" : "bg-[#F0F2F6]"
        } rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-3xl flex items-center justify-between px-4 shadow-md`}
      >
        <button onClick={toggleTheme}>
          <Image
            src={isDarkMode ? "/images/sun.jpeg" : "/images/moon.jpeg"}
            alt="Theme Toggle"
            width={24}
            height={24}
            className="rounded"
          />
        </button>
        <button>
          <Image
            src={
              isDarkMode ? "/images/bell-white.png" : "/images/bell-black.png"
            }
            alt="Notifications"
            width={28}
            height={28}
            className="rounded"
          />
        </button>

        <Link href="/admin">
          <button>
            <Image
              src="/images/Liftu-Image.jpeg"
              alt="User Avatar"
              width={28}
              height={28}
              className="rounded"
            />
          </button>
        </Link>
      </div>
    </header>
  );
}
