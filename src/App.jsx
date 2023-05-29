import "./App.css";
import CubeGraph from "./components/CubeGraph.jsx";
import Header from "./components/Header.jsx";
import Heading from "./components/Heading.jsx";
import Settings from "./components/Settings.jsx";
import {
  airplane,
  building,
  buyingCategory,
  car,
  clothes,
  data,
  electricity,
  electronic,
  fish,
  foodCategory,
  heating,
  house,
  housingCategory,
  leisure,
  meat,
  milkEggs,
  others,
  publicCategory,
  thrash,
  transportCategory,
} from "./domain/data.js";
import { useState } from "react";
import computeCategoryTotal from "./utils/computeCategoryTotal.js";
import getTotalColor from "./utils/getTotalColor.js";
function App() {
  const [meatReduction, setMeatReduction] = useState(0);
  const [longFlights, setTotalLongFlights] = useState(1);
  const [noCar, setNoCar] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [noThrash, setNoThrash] = useState(false);
  const [noHousingFossile, setNoHousingFossile] = useState(false);
  const [secondHandClothes, setSecondHandClothes] = useState(false);
  const [flat, setFlat] = useState(false);
  const [keeper, setKeeper] = useState(false);

  const computedData = data.map((datum) => {
    if (
      vegan &&
      (datum.name === meat || datum.name === fish || datum.name === milkEggs)
    ) {
      return { ...datum, size: 0 };
    }
    if (vegetarian && (datum.name === meat || datum.name === fish)) {
      return { ...datum, size: 0 };
    }
    if (noCar && datum.name === car) {
      return { ...datum, size: 0 };
    }
    if (noThrash && datum.name === thrash) {
      return { ...datum, size: 0 };
    }
    if (
      keeper &&
      ((datum.name === others && datum.category === buyingCategory) ||
        datum.name === electronic ||
        datum.name === leisure)
    ) {
      return { ...datum, size: datum.size / 2 };
    }
    if (flat && datum.name === house) {
      return { ...datum, size: datum.size / 3 };
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
      return { ...datum, size: datum.size * 2 };
    }
    if (secondHandClothes && datum.name === clothes) {
      return { ...datum, size: 0 };
    }
    if (meatReduction && datum.name === meat) {
      return { ...datum, size: datum.size / meatReduction };
    }

    if (datum.name === airplane) {
      return { ...datum, size: longFlights * 1500 };
    }
    return datum;
  });
  const total = computedData.reduce((acc, datum) => acc + datum.size, 0);

  return (
    <main className={"mx-auto w-11/12 md:w-full"}>
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
      />
      <div className="flex gap-4">
        <div className="w-1/3">
          <div className={"flex h-full text-center"}>
            <div className={"m-auto"}>
              <div className={`text-5xl font-bold ${getTotalColor(total)}`}>
                {Math.floor(total).toLocaleString()}
              </div>
              <span className={"text-xl text-slate-600"}>total kgCO2eq</span>
              <div className={"text-lg text-slate-600"}>
                Objectif neutralité carbone : 2T/an/personne
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <section className={"relative"}>
            <CubeGraph computedData={computedData} />
          </section>
        </div>
      </div>
      <footer className={"mb-2 mt-6 flex"}>
        <div className={"mx-auto flex"}>
          Fait avec amour par{" "}
          <a
            className={"ml-2 underline hover:text-slate-700"}
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
