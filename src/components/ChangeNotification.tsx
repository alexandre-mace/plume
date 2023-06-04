const ChangeNotification = ({
  visible,
  loweringTotal,
  reduction,
}: {
  visible: boolean;
  loweringTotal: boolean;
  reduction: number;
}) => (
  <div
    className={`bo mx-4 flex items-center gap-4 rounded-md border bg-white px-4 py-3 shadow-sm  ${
      visible ? "animate-enter" : "animate-leave"
    }`}
  >
    <div
      className={`rounded-full ${
        loweringTotal ? "bg-green-100" : "bg-red-100"
      } flex h-12 w-12 items-center justify-center p-2 text-3xl`}
    >
      {loweringTotal && (
        <div>{reduction >= 8 ? "🚀" : reduction >= 5 ? "💪" : "🐣"}</div>
      )}
      {!loweringTotal && (
        <div>{reduction >= 8 ? "😱" : reduction >= 5 ? "😟" : "😕"}</div>
      )}
    </div>
    <div className={"text-sm font-medium"}>
      Vous avez {loweringTotal ? "réduit" : "augmenté"} votre empreinte de{" "}
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
);

export default ChangeNotification;
