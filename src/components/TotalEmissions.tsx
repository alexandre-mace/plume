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
  </div>
);

export default TotalEmissions;
