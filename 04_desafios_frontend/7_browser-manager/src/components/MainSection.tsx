export default function MainSection() {
  return (
    <div className="grid grid-cols-1 text-center gap-5 mt-10">
      <h1 className="font-notoSans-bold text-3xl">Extensions List</h1>
      <div className="flex gap-3 justify-center">
        <button className="p-2 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0">
          All
        </button>
        <button className="p-2 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0">
          Active
        </button>
        <button className="p-2 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0">
          Inactive
        </button>
      </div>
    </div>
  );
}
