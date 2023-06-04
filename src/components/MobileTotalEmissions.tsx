import getTotalColor from "../lib/utils/getTotalColor";

const MobileTotalEmissions = ({ total }: { total: number }) => (
  <div
    className={
      "fixed bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-white p-2 text-center shadow md:hidden"
    }
  >
    <div className={`text-xl font-bold md:text-5xl ${getTotalColor(total)}`}>
      {Math.floor(total).toLocaleString()}
    </div>
    <span className={"text-md text-slate-600 md:text-xl"}>total kgCO2eq</span>
  </div>
);

export default MobileTotalEmissions;
