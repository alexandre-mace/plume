import "./App.css";
import CubeGraph from "./components/CubeGraph.jsx";
import Header from "./components/Header.jsx";
import Heading from "./components/Heading.jsx";
import Settings from "./components/Settings.jsx";
import {
  administration,
  airplane,
  bank,
  building,
  buyingCategory,
  car,
  clothes,
  culture,
  data,
  electricity,
  electricityHeatingRatio,
  electronic,
  fish,
  flatVsHouseRatio,
  foodCategory,
  health,
  healthEducation,
  heating,
  house,
  housingCategory,
  infrastructure,
  keeperRatio,
  leisure,
  longFlightCost,
  meat,
  mediumFlightCost,
  milkEggs,
  noThrashPolicy,
  others,
  otherTransports,
  publicCategory,
  publicDecarbRatio,
  teaching,
  thrash,
  transportCategory,
  veganAnimalConsumption,
  vegetarianFleshConsumption,
} from "./domain/data.js";
import { useEffect, useState } from "react";
import computeCategoryTotal from "./utils/computeCategoryTotal.js";
import getTotalColor from "./utils/getTotalColor.js";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [meatReduction, setMeatReduction] = useState(0);
  const [longFlights, setTotalLongFlights] = useState(1);
  const [mediumFlights, setTotalMediumFlights] = useState(2);
  const [noCar, setNoCar] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [noThrash, setNoThrash] = useState(false);
  const [noHousingFossile, setNoHousingFossile] = useState(false);
  const [secondHandClothes, setSecondHandClothes] = useState(false);
  const [flat, setFlat] = useState(false);
  const [keeper, setKeeper] = useState(false);
  const [publicDecarb, setPublicDecarb] = useState(false);

  const computedData = data.map((datum) => {
    if (
      vegan &&
      (datum.name === meat || datum.name === fish || datum.name === milkEggs)
    ) {
      return { ...datum, size: veganAnimalConsumption };
    }
    if (vegetarian && (datum.name === meat || datum.name === fish)) {
      return { ...datum, size: vegetarianFleshConsumption };
    }
    if (noCar && datum.name === car) {
      return { ...datum, size: 0 };
    }
    if (noThrash && datum.name === thrash) {
      return { ...datum, size: noThrashPolicy };
    }
    if (
      keeper &&
      ((datum.name === others && datum.category === buyingCategory) ||
        datum.name === electronic ||
        datum.name === leisure)
    ) {
      return { ...datum, size: datum.size / keeperRatio };
    }
    if (flat && keeper && datum.name === house) {
      return { ...datum, size: datum.size / keeperRatio / flatVsHouseRatio };
    }
    if (keeper && datum.name === house) {
      return { ...datum, size: datum.size / keeperRatio };
    }
    if (flat && datum.name === house) {
      return { ...datum, size: datum.size / flatVsHouseRatio };
    }
    if (flat && datum.name === building) {
      return { ...datum, size: 0 };
    }
    if (noHousingFossile && datum.name === heating) {
      return { ...datum, size: 0 };
    }
    if (noHousingFossile && datum.name === electricity && flat) {
      return { ...datum, size: datum.size };
    }
    if (noHousingFossile && datum.name === electricity) {
      return { ...datum, size: datum.size * electricityHeatingRatio };
    }
    if (secondHandClothes && datum.name === clothes) {
      return { ...datum, size: 0 };
    }
    if (
      publicDecarb &&
      (datum.name === infrastructure ||
        datum.name === culture ||
        datum.name === teaching ||
        datum.name === health ||
        datum.name === healthEducation ||
        datum.name === otherTransports ||
        datum.name === bank ||
        datum.name === administration ||
        (datum.name === others && datum.category === publicCategory))
    ) {
      return { ...datum, size: datum.size / publicDecarbRatio };
    }
    if (meatReduction && datum.name === meat) {
      return { ...datum, size: datum.size / meatReduction };
    }
    if (datum.name === airplane) {
      return {
        ...datum,
        size: longFlights * longFlightCost + mediumFlights * mediumFlightCost,
      };
    }
    return datum;
  });

  const total = computedData.reduce((acc, datum) => acc + datum.size, 0);

  useEffect(() => {
    localStorage.removeItem("previousTotal");
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("previousTotal") &&
      parseInt(localStorage.getItem("previousTotal")) !== total
    ) {
      let previousTotal = parseInt(localStorage.getItem("previousTotal"));
      let loweringTotal = previousTotal > total;
      let reduction = Math.round(
        Math.abs(
          (loweringTotal
            ? (total - previousTotal) / previousTotal
            : (previousTotal - total) / total) * 100
        )
      );

      toast.custom(
        (t) => (
          <div
            className={`bo mx-4 flex items-center gap-4 rounded-md border bg-white px-4 py-3 shadow-sm  ${
              t.visible ? "animate-enter" : "animate-leave"
            }`}
          >
            <div
              className={`rounded-full ${
                loweringTotal ? "bg-green-100" : "bg-red-100"
              } flex h-16 w-16 items-center justify-center p-2 text-4xl`}
            >
              {loweringTotal && (
                <div>
                  {reduction >= 8 ? "🚀" : reduction >= 5 ? "💪" : "🐣"}
                </div>
              )}
              {!loweringTotal && (
                <div>
                  {reduction >= 8 ? "😱" : reduction >= 5 ? "😟" : "😕"}
                </div>
              )}
            </div>
            <div className={"text-sm font-medium"}>
              Vous avez {loweringTotal ? "réduit" : "augmenté"} votre empreinte
              de{" "}
              <span
                className={`text-lg font-bold ${
                  loweringTotal ? "text-green-500" : "text-red-500"
                }`}
              >
                {reduction}
              </span>{" "}
              %
            </div>
          </div>
        ),
        {
          position: "bottom-center",
        }
      );
    }
    localStorage.setItem("previousTotal", total);
  }, [
    meatReduction,
    longFlights,
    mediumFlights,
    noCar,
    vegetarian,
    vegan,
    noThrash,
    noHousingFossile,
    secondHandClothes,
    flat,
    keeper,
    publicDecarb,
  ]);

  return (
    <main className={"mx-auto md:w-full"}>
      <Toaster containerClassName="toaster-wrapper" />
      <Header />
      <Heading />
      <Settings
        publicSize={computeCategoryTotal(publicCategory, computedData)}
        buyingSize={computeCategoryTotal(buyingCategory, computedData)}
        foodSize={computeCategoryTotal(foodCategory, computedData)}
        transportSize={computeCategoryTotal(transportCategory, computedData)}
        housingSize={computeCategoryTotal(housingCategory, computedData)}
        meatReduction={meatReduction}
        setMeatReduction={setMeatReduction}
        longFlights={longFlights}
        setTotalLongFlights={setTotalLongFlights}
        mediumFlights={mediumFlights}
        setTotalMediumFlights={setTotalMediumFlights}
        noCar={noCar}
        setNoCar={setNoCar}
        noThrash={noThrash}
        setNoThrash={setNoThrash}
        noHousingFossile={noHousingFossile}
        setNoHousingFossile={setNoHousingFossile}
        vegetarian={vegetarian}
        setVegetarian={setVegetarian}
        vegan={vegan}
        setVegan={setVegan}
        secondHandClothes={secondHandClothes}
        setSecondHandClothes={setSecondHandClothes}
        flat={flat}
        setFlat={setFlat}
        keeper={keeper}
        setKeeper={setKeeper}
        publicDecarb={publicDecarb}
        setPublicDecarb={setPublicDecarb}
      />
      <section className="flex flex-col gap-4 md:flex-row">
        <div className="mt-8 md:mt-0 md:w-1/3">
          <div className={"align-start flex h-full justify-center text-center"}>
            <div className={"mt-14 flex w-full flex-col pl-4"}>
              <div className={""}>
                <div
                  className={`text-3xl font-bold md:text-5xl ${getTotalColor(
                    total
                  )}`}
                >
                  {Math.floor(total).toLocaleString()}
                </div>
                <span className={"text-lg text-slate-600 md:text-xl"}>
                  total kgCO2eq
                </span>
                <div className={"md:text-md text-slate-600"}>
                  Objectif neutralité carbone : 2T/an/personne
                </div>
              </div>

              <div className="mb-4 mt-10 h-full w-full text-start">
                <div className={"mb-2 font-medium"}>Les tops émissions 👇</div>
                {computedData
                  .sort((a, b) => b.size - a.size)
                  .slice(0, 5)
                  .map((item) => (
                    <div className={"flex justify-between"} key={item.name}>
                      <div>{item.name}</div>
                      <div className={""}>{item.size}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className={"relative mt-6"}>
            <CubeGraph computedData={computedData} />
          </div>
        </div>
      </section>
      <div
        className={
          "fixed bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-white p-2 text-center shadow md:hidden"
        }
      >
        <div
          className={`text-xl font-bold md:text-5xl ${getTotalColor(total)}`}
        >
          {Math.floor(total).toLocaleString()}
        </div>
        <span className={"text-md text-slate-600 md:text-xl"}>
          total kgCO2eq
        </span>
      </div>
      <footer className={"mb-2 mt-6 flex"}>
        <div className={"mx-auto flex"}>
          Fait avec amour par{" "}
          <a
            className={"ml-1 underline hover:text-slate-700"}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alexandre-mace"
          >
            alexandre-mace
          </a>
        </div>
      </footer>
    </main>
  );
}
export default App;
