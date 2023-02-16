interface BooksCardProps {
  name: string;
  description: string;
  photo: string;
  locale: string;
}

export function BooksCard({
  name,
  description,
  photo,
  locale,
}: BooksCardProps) {
  return (
    <div className="w-96 flex flex-col gap-4 border border-zinc-300 rounded-lg">
      <img src={photo} alt="" className="w-full h-[153px]" />
      <div className="p-4 flex flex-col gap-4">
        <span className="text-xl font-bold">{name}</span>
        <span className="opacity-70">{description}</span>
        <span className="opacity-70">{locale}</span>
      </div>
    </div>
  );
}
