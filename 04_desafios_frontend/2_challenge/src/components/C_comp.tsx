type MyType = {
  day: string;
  wheater: string;
  min: number;
  max: number;
};

export default function C_comp({ day, wheater, min, max }: MyType) {
  return (
    <div className="h-40 bg-own-neutral-600 w-26.5 rounded-2xl flex flex-col items-center justify-between p-3">
      <p>{day}</p>
      <img
        src={`/images/icon-${wheater}.webp`}
        className="w-13 h-13"
        alt="image of a storm"
      />
      <div className="flex justify-between w-full">
        <p>{min}°</p>
        <p>{max}°</p>
      </div>
    </div>
  );
}
