type A_type_params = {
  city: string;
  country: string;
  date: string;
  wheater: string;
  temperature: string;
};

export default function A_comp({
  city,
  country,
  date,
  temperature,
  wheater,
}: A_type_params) {
  return (
    <>
      {/* A desktop izquierda */}
      <div className=" pt-3 flex flex-col desktop:items-start justify-center">
        <h1 className="font-DM-bold">
          {city}, {country}
        </h1>
        <p className="text-lg mt-2 font-DM">{date}</p>
      </div>
      {/* A desktop deracha */}
      <div className="flex justify-center pt-4 items-center">
        <img
          src={`/images/icon-${wheater}.webp`}
          alt="sun image"
          className="w-30 h-30"
        />
        <h1 className="text-[95px] font-DM-semibold-italic">{temperature}</h1>
      </div>
    </>
  );
}
