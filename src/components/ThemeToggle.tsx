"use client";

import Image from "next/image";
import { useTheme } from "../app/context/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="default"
      onClick={toggleTheme}
      className="bg-transparent hover:bg-transparent cursor-pointer"
    >
      {theme === "light" ? (
        <Image
          className="hover:bg-gray-200 bg-white p-2 rounded-3xl"
          src={"/dark-theme-icon.svg"}
          alt="Dark theme Icon"
          width={40}
          height={40}
        />
      ) : (
        <Image
          className="hover:bg-gray-800 bg-black p-2 rounded-3xl"
          src={"/light-theme-icon.svg"}
          alt="Dark theme Icon"
          width={40}
          height={40}
        />
      )}
    </Button>
  );
};

export default ThemeToggle;
