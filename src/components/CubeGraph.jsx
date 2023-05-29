import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
import { Chart } from "react-chartjs-2";
import {
  buyingCategory,
  data,
  foodCategory,
  housingCategory,
  publicCategory,
  transportCategory,
} from "./../domain/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TreemapController,
  TreemapElement
);
const getCategoryColor = (category) => {
  if (category === transportCategory) return "blue";
  if (category === foodCategory) return "red";
  if (category === housingCategory) return "green";
  if (category === buyingCategory) return "purple";
  if (category === publicCategory) return "grey";
};

export default function TreemapChart({ computedData }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Empreinte carbone (kgCO2eq)",
        color: "#475569",
        font: { weight: "500" },
      },
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        color: "white",
        callbacks: {
          title(items) {
            return items[1]
              ? items[1].raw._data.children[0].name
              : items[0].raw._data.children[0].category;
          },
          label(item) {
            const {
              _data: { size },
            } = item.raw;
            return item.formattedValue !== "0"
              ? `Émissions : ${Math.floor(size)} kgCO2eq`
              : `Total catégorie : ${Math.floor(size)} kgCO2eq`;
          },
        },
      },
    },
  };

  const totalSize = computedData.reduce((acc, datum) => acc + datum.size, 0);

  const config = {
    type: "treemap",
    data: {
      datasets: [
        {
          tree: computedData,
          key: "size",
          groups: ["category", "size"],
          labels: {
            display: true,
            color: "white",
            formatter: (context) => [
              context.raw._data.children[0].name,
              Math.floor(context.raw._data.children[0].size),
            ],
          },
          backgroundColor(context) {
            if (context.type !== "data") return "transparent";
            const { size, category } = context.raw._data;
            if (size === 0) return color("grey").rgbString();
            return color(getCategoryColor(category))
              .alpha(size / totalSize + 0.3 > 1 ? 1 : size / totalSize + 0.3)
              .rgbString();
          },
        },
      ],
    },
  };

  return (
    <div
      className="chart-container"
      style={{
        position: "relative",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Chart type="treemap" data={config.data} options={options} />
    </div>
  );
}
