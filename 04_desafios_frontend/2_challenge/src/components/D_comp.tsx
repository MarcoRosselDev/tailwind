type D_types_props = {
  forecast: string;
  hour: string;
  info: string;
};

export default function D_compo({ forecast, hour, info }: D_types_props) {
  return (
    <div
      className="flex justify-between p-4 w-full
bg-own-neutral-600 mt-4 rounded-lg text-lg"
    >
      {/* left */}
      <div className="flex items-center">
        <img
          src={`/images/icon-${forecast}.webp`}
          className="w-8 h-8 text-lg absolute"
          alt=""
        />
        <h1 className="font-DM-semibold ml-10.5">{hour}</h1>
      </div>
      {/* right */}
      <p className="font-DM-light text-[15px]">{info}</p>
    </div>
  );
}
