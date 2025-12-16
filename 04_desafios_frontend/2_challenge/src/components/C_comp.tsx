type MyType = {
  day: string;
  wheater: string;
  min: number;
  max: number;
};

export default function C_comp({ day, wheater, min, max }: MyType) {
  return (
    <div
      className=" bg-own-neutral-700 rounded-xl w-full p-3 h-43
      flex flex-col items-center justify-between
      text-lg 
    "
    >
      <p className="font-DM-semibold">{day}</p>
      <img
        src={`/images/icon-${wheater}.webp`}
        className="w-13 h-13 "
        alt="image of a storm"
      />
      <div className="flex justify-between w-full">
        <p className="font-DM-semibold">{min}°</p>
        <p>{max}°</p>
      </div>
    </div>
  );
}
