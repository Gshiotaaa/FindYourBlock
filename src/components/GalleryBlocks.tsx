import { useState } from "react";
import data from "../../data.json";
import { ChangeBlock } from "../App";
import { BooksCard } from "./BocksCard";

interface Blocks {
  name: string;
  description: string;
  photo: string;
  locale: string;
}

interface GalleryBlocksProps {
  changeBlocks: ChangeBlock | undefined;
}

export function GalleryBlocks({ changeBlocks }: GalleryBlocksProps) {
  const [blocks, setBlocks] = useState<Blocks[]>(data.blocks);

  return (
    <div className="flex flex-col px-24 py-16 gap-10 ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Blocos recomendados</h1>
        <div className="flex border-zinc-400 border px-4 py-2 rounded-lg">
          <button className="px-6 font-semibold text-purple focus:bg-button focus:text-white rounded-lg ">
            Lista
          </button>
          <button className="px-6 font-semibold text-purple focus:bg-button focus:text-white rounded-lg ">
            Mapa
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-8 justify-center ">
        {blocks
          .filter((block) => {
            if (changeBlocks?.name) {
              console.log(block.name);
              console.log(changeBlocks.name);
              return block.name.toLowerCase().includes(changeBlocks.name);
            } else {
              return block;
            }
          })
          .filter((block) => {
            if (
              changeBlocks &&
              changeBlocks?.locale !== "Selecione uma cidade"
            ) {
              return block.locale === changeBlocks?.locale;
            } else {
              return block;
            }
          })
          .map((block) => {
            return (
              <BooksCard
                key={block.name}
                name={block.name}
                photo={block.photo}
                description={block.description}
                locale={block.locale}
              />
            );
          })}
      </div>
    </div>
  );
}
