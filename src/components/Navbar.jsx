import Link from "next/link";
import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { ChevronDown, Heart, Lightbulb, ShoppingCart } from "lucide-react";
import Image from "next/image";

const categories = [
  { name: "Art de la table", href: "/" },
  { name: "Mobilier", href: "/" },
  { name: "Nappage", href: "/" },
  { name: "Matériel de salle", href: "/" },
  { name: "Cuisine", href: "/" },
  { name: "Barbecue", href: "/" },
  { name: "Tente", href: "/" },
  { name: "Chauffage", href: "/" },
  { name: "Podium - Piste de danse", href: "/" },
  { name: "Son et lumière", href: "/" },
  { name: "Packs", href: "/" },
  { name: "Consommables", href: "/" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 p-4 w-full min-h-16 bg-slate-100 text-zinc-900">
      <div className="flex justify-between items-center gap-4 ">
        <div className="flex gap-4 items-center flex-1">
          <Image src="./logo.svg" alt="logo" width={40} height={40} />
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-center gap-4">
            <div className="w-fit flex justify-center items-center gap-2">
              <Lightbulb />
              <Link href={"/"}>Inspirations</Link>
            </div>
            <div className="w-fit flex justify-center items-center gap-2">
              <Heart />
              <Link href={"/"}>Mes favoris</Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Button>
              <ShoppingCart />
              <span>Panier</span>
            </Button>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <figure>
              {/* <Image
                src="./logo.svg"
                alt="user-icon"
                width={40}
                height={40}
                className="rounded-full"
              /> */}
              <div className="w-10 h-10 rounded-full bg-slate-500"></div>
            </figure>
            <div className="flex justify-center">
              <span className="">FR</span>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
      <footer className=" mt-4 py-2 px-4">
        <nav className="flex md:justify-between items-center gap-2 flex-wrap ">
          {categories.map(({ name, href }, index) => (
            <Link
              href={href}
              key={index}
              className="text-sm font-bold text-gray-500"
            >
              {name}
            </Link>
          ))}
        </nav>
      </footer>
    </header>
  );
}

export default Navbar;
