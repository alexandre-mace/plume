import toast from "react-hot-toast";
import ChangeNotification from "../components/ChangeNotification";

const handleToast = (total: number) => {
  if (
    localStorage.getItem("previousTotal") &&
    parseInt(String(localStorage.getItem("previousTotal"))) !== total
  ) {
    const previousTotal = parseInt(
      String(localStorage.getItem("previousTotal"))
    );
    const loweringTotal = previousTotal > total;
    const reduction = Math.round(
      Math.abs(
        (loweringTotal
          ? (total - previousTotal) / previousTotal
          : (previousTotal - total) / total) * 100
      )
    );

    toast.custom(
      (t) => (
        <ChangeNotification
          loweringTotal={loweringTotal}
          reduction={reduction}
          visible={t.visible}
        />
      ),
      {
        position: "bottom-center",
      }
    );
  }
  localStorage.setItem("previousTotal", String(total));
};

export default handleToast;
