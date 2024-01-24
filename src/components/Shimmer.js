import { SHIMMER_RES_CARDS_COUNT } from "../utils/constants";

const CardShimmer = () => {
  return (
    <div className="border border-gray-400 shadow rounded-md p-4 basis-[250px] h-[250px]">
      <div className="animate-pulse space-x-6 text-center">
        <div className="rounded-sm bg-slate-200 h-[150px] w-[250px]"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-evenly">
      {Array.from({ length: SHIMMER_RES_CARDS_COUNT }).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
