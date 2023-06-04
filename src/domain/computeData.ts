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
  health,
  healthEducation,
  heating,
  house,
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
  veganAnimalConsumption,
  vegetarianFleshConsumption,
} from "./data";

const computeData = (
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
) => {
  return data.map((datum) => {
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
};

export default computeData;
