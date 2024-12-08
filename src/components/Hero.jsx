import { CircleSlash2, Heart, Plus, Ruler } from "lucide-react";
import Image from "next/image";
import React from "react";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Art de la table", href: "/art-de-la-table" },
  { name: "Cuisine", href: "/cuisine" },
];

function Hero() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="flex gap-4 items-center py-4">
          <span className="font-bold">Home</span>
          <span className="w-2 h-2 inline-block rounded-full bg-slate-400" />
          <span className="text-gray-500 font-bold">Art de la table</span>
        </div>

        <div className="flex justify-between">
          <div className="bg-[#F8F6F4] rounded-xl flex items-center relative justify-center">
            <figure className="p-24">
              <Image src={"/product.png"} width={450} height={450} />
            </figure>
            <div className="absolute inset-0 flex w-fit p-4 flex-col gap-2">
              <figure className="bg-white rounded-lg">
                <Image
                  src={"/table.png"}
                  width={80}
                  height={80}
                  alt="product-img"
                />
              </figure>
              <figure className="bg-white rounded-lg">
                <Image
                  src={"/table.png"}
                  width={80}
                  height={80}
                  alt="product-img"
                />
              </figure>
              <figure className="bg-white rounded-lg">
                <Image
                  src={"/table.png"}
                  width={80}
                  height={80}
                  alt="product-img"
                />
              </figure>
            </div>
          </div>
          <div className="py-4 px-6 flex-1 flex justify-between flex-col">
            <div>
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold text-2xl">
                    Cheese – appareil à raclette 1/2 roue
                  </h2>
                </div>
                <Heart />
              </div>
              <div className="divide-x space-y-2">
                <span className="font-semibold text-lg">39,50€</span>
                <span className="text-zinc-400">/pièce</span>
              </div>
              <div className="flex gap-4 py-4">
                <div>
                  <Ruler />
                  <span className="text-sm font-bold text-gray-500">20cm</span>
                </div>
                <div>
                  <CircleSlash2 />
                  <span className="text-sm font-bold text-gray-500">50cm</span>
                </div>
              </div>
              <div>
                <p>
                  Location appareil à raclette - Raclette traditionnelle 1/2
                  roue Réglable en hauteur Appareil à raclette professionnel
                  Boîtier de chauffe horizontal réglable en hauteur
                  <br />
                  220V <br />
                  900W
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-fit border border-zinc-950 space-x-4 rounded-lg px-4 py-2.5">
                <span className="ml-2   text-base font-bold text-gray-500">
                  -
                </span>
                <span className="font-semibold text-base  text-zinc-800">
                  1
                </span>
                <span className=" text-base  font-bold text-gray-500">+</span>
              </button>
              <button className="primary px-4 py-2.5 w-full bg-slate-500 rounded-lg">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col gap-4 py-4 px-2 flex-1">
            <h2 className="font-semibold text-xl">Description produit</h2>
            <p className="text-sm">
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autre produit à louer de ce
              type dans la catégorie "Art de la Table".
            </p>
          </div>
          <div className="flex-1 p-4 space-y-4 flex justify-center flex-col">
            <div className="p-4 rounded-lg flex justify-between bg-[#F8F6F4]">
              <span className="inline-block">Livraisons</span>
              <Plus />
            </div>
            <div className="p-4 rounded-lg flex justify-between bg-[#F8F6F4]">
              <span className="inline-block">Questions</span>
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
