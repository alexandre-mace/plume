const getTotalColor = (total: number) => {
  if (total > 6000) {
    return "text-red-500";
  }
  if (total > 4500) {
    return "text-orange-500";
  }
  if (total > 3500) {
    return "text-yellow-500";
  }

  if (total > 2000) {
    return "text-yellow-400";
  }

  return "text-green-500";
};

export default getTotalColor;
