export function WorkCard(props: { title: string; info: string }) {
  return (
    <div className="w-[412px] cursor-pointer rounded-2xl shadow-xl transition-all hover:scale-105">
      <div className="bg-primary-500 h-[243px] rounded-t-2xl"></div>
      <div className="flex flex-col gap-2 p-2 pb-4 text-center">
        <h4 className="text-sm font-semibold">{props.title}</h4>
        <p className="text-xs">{props.info}</p>
      </div>
    </div>
  );
}
