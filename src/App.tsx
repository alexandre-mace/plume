import "./App.css";
import CubeGraph from "./components/CubeGraph.jsx";
import Header from "./components/Header.jsx";
import Heading from "./components/Heading.jsx";
import Settings from "./components/Settings.jsx";
import {
  buyingCategory,
  foodCategory,
  housingCategory,
  publicCategory,
  transportCategory,
} from "./domain/data.js";
import { useEffect, useState } from "react";
import computeCategoryTotal from "./lib/utils/computeCategoryTotal.js";
import { Toaster } from "react-hot-toast";
import TopEmissions from "./components/TopEmissions";
import Footer from "./components/Footer";
import handleToast from "./lib/handleToast";
import computeData from "./domain/computeData";

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

  const computedData = computeData(
    vegan,
    vegetarian,
    noCar,
    noThrash,
    keeper,
    flat,
    noHousingFossile,
    secondHandClothes,
    publicDecarb,
    meatReduction,
    longFlights,
    mediumFlights
  );

  const total = computedData.reduce((acc, datum) => acc + datum.size, 0);

  useEffect(() => {
    localStorage.removeItem("previousTotal");
  }, []);

  useEffect(
    () => handleToast(total),
    [
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
    ]
  );

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
              <TopEmissions computedData={computedData} />
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className={"relative mt-6 md:pr-4"}>
            <CubeGraph computedData={computedData} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
export default App;
