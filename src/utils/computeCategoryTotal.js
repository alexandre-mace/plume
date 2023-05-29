const computeCategoryTotal = (category, computedData) => {
  return Math.floor(
    computedData
      .filter((datum) => datum.category === category)
      .reduce((acc, datum) => acc + datum.size, 0)
  );
};

export default computeCategoryTotal;
