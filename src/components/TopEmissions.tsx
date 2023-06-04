const TopEmissions = ({ computedData }: { computedData: Array<any> }) => (
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
);

export default TopEmissions;
