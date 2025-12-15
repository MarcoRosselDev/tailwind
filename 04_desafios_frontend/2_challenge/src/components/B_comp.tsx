type B_props_type = {
  title: string;
  info: string;
};

export default function B_comp({ info, title }: B_props_type) {
  return (
    <div className="p-5 bg-own-neutral-600 rounded-xl h-30 flex flex-col items-start justify-between">
      <p className="text-lg ">{title}</p>
      <h1 className="font-DM">{info}</h1>
    </div>
  );
}
