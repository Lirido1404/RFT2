"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

function SearchBar({ cars }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtre = () => {
    cars.filter((car) => {
      return cars.name.includes(searchTerm);
    });
  };

  return (
    <div className="mt-6 h-16 border-2 rounded-md shadow border-slate-200 p-4 w-[50%] mx-auto flex items-center">
      <input
        type="text"
        placeholder="Recherche"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
