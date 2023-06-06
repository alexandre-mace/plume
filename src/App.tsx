import "./App.css";
import CubeGraph from "./components/CubeGraph";
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
import TotalEmissions from "./components/TotalEmissions";
import MobileTotalEmissions from "./components/MobileTotalEmissions";
import EffortGraph from "./components/EffortGraph";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/GraphSwitcher";

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
  const [localFood, setLocalFood] = useState(false);
  const [shortShowers, setShortShowers] = useState(false);
  const [stopYoutubeStreaming, setStopYoutubeStreaming] = useState(false);

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
    mediumFlights,
    localFood,
    shortShowers,
    stopYoutubeStreaming
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
      localFood,
      shortShowers,
      stopYoutubeStreaming,
    ]
  );

  return (
    <main className={"mx-auto flex min-h-screen flex-col md:w-full"}>
      <Toaster containerClassName="toaster-wrapper" />
      <Header />
      <Heading />
      <section className="relative z-20 flex flex-col justify-center gap-4 bg-white">
        <div className="md:mt-0">
          <div className={"flex h-full justify-center text-center"}>
            <div className={"mt-6 flex w-full flex-col px-4 md:mt-10"}>
              <TotalEmissions total={total} />
              {/*<TopEmissions computedData={computedData} />*/}
            </div>
          </div>
        </div>
        <div className={"mt-4 px-4"}>
          <Tabs defaultValue="0" className="mx-auto">
            <TabsList>
              <TabsTrigger value="0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="0">
              <EffortGraph computedData={computedData} total={total} />
            </TabsContent>
            <TabsContent value="1">
              <div className={"relative mt-6 md:pr-4"}>
                <CubeGraph computedData={computedData} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        {/*<div className="md:w-2/3">*/}

        {/*</div>*/}
      </section>
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
        total={total}
        localFood={localFood}
        setLocalFood={setLocalFood}
        shortShowers={shortShowers}
        setShortShowers={setShortShowers}
        stopYoutubeStreaming={stopYoutubeStreaming}
        setStopYoutubeStreaming={setStopYoutubeStreaming}
      />
      <MobileTotalEmissions total={total} />
      <Footer />
    </main>
  );
}
export default App;
