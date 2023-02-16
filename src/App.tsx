import { useState } from "react";
import { GalleryBlocks } from "./components/GalleryBlocks";
import { Header } from "./components/Header";

export interface ChangeBlock {
  name: string;
  locale: string;
}

export function App() {
  const [changeBlock, setChangeBlock] = useState<ChangeBlock>();

  return (
    <div className="flex flex-col">
      <Header changeBlocks={changeBlock} setChangeBlock={setChangeBlock} />
      <GalleryBlocks changeBlocks={changeBlock} />
    </div>
  );
}
