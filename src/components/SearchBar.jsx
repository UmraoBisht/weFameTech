import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="w-full flex gap-2 rounded-lg bg-[#F9FAFB] py-2 px-4">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Rechercher un produit"
        className="w-full"
      />
      <Search />
    </div>
  );
}

export default SearchBar;
