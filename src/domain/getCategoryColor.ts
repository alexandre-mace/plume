import {
  buyingCategory,
  foodCategory,
  housingCategory,
  publicCategory,
  transportCategory,
} from "./data";

const getCategoryColor = (category: string) => {
  if (category === transportCategory) return "blue";
  if (category === foodCategory) return "red";
  if (category === housingCategory) return "green";
  if (category === buyingCategory) return "purple";
  if (category === publicCategory) return "grey";
  return "transparent";
};

export default getCategoryColor;
