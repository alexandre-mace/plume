import getTotalColor from "../lib/utils/getTotalColor";

const TotalEmissions = ({ total }: { total: number }) => (
  <div>
    <div className={`text-3xl font-bold md:text-5xl ${getTotalColor(total)}`}>
      {Math.floor(total).toLocaleString()}
    </div>
    <span className={"text-lg text-slate-600 md:text-xl"}>total kgCO2eq</span>
    <div className={"md:text-md text-slate-600"}>
      Objectif neutralité carbone : 2T/an/personne
    </div>
    <div
      className={
        "fixed bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-white p-2 text-center shadow md:hidden"
      }
    >
      <div className={`text-xl font-bold md:text-5xl ${getTotalColor(total)}`}>
        {Math.floor(total).toLocaleString()}
      </div>
      <span className={"text-md text-slate-600 md:text-xl"}>total kgCO2eq</span>
    </div>
  </div>
);

export default TotalEmissions;
