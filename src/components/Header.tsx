import { FormEvent } from "react";
import data from "../../data.json";
import { ChangeBlock } from "../App";

interface AppProps {
  setChangeBlock: React.Dispatch<React.SetStateAction<ChangeBlock | undefined>>;
  changeBlocks: ChangeBlock | undefined;
}

export function Header({ setChangeBlock, changeBlocks }: AppProps) {
  function handleChangeBlock(e: FormEvent) {
    e.preventDefault();

    setChangeBlock({
      name: e.target.name.value.toLowerCase(),
      locale: e.target.city.value,
    });

    e.target.name.value = "";
    e.target.city.value = "Selecione uma cidade";
  }

  return (
    <div className="flex flex-col items-center justify-center h-[532px] w-full bg-header bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center gap-10 w-4/6 ">
        <div className="text-center flex flex-col gap-5">
          <span className="text-red-600 font-medium">Find your block</span>
          <h1 className="text-5xl font-bold">
            Encontre os <span className="text-purple ">melhores blocos </span>de
            carnaval em 2023
          </h1>
        </div>
        <form
          onSubmit={handleChangeBlock}
          className="w-full bg-white flex gap-5 p-10 rounded-md border border-zinc-400"
        >
          <input
            type="text"
            name="name"
            placeholder="Pesquise por nome"
            className="p-4 flex-1 border-1px border-black bg-input rounded-md"
          />
          <select
            name="city"
            className="flex-1 border-1px border-black bg-input rounded-md px-4"
          >
            <option>Selecione uma cidade</option>
            {[...new Set(data.blocks.map((block) => block.locale))].map(
              (block) => (
                <option>{block}</option>
              )
            )}
          </select>
          <button
            type="submit"
            className="py-3 px-8 bg-button text-white rounded-lg"
          >
            Buscar Agora
          </button>
        </form>
      </div>
    </div>
  );
}
