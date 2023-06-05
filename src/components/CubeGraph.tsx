import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartConfiguration,
  ChartOptions,
} from "chart.js";
import { color } from "chart.js/helpers";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
import { Chart } from "react-chartjs-2";
import useWindowDimensions from "../hooks/useWindowDimensions";
import getCategoryColor from "../domain/getCategoryColor";

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

export default function TreemapChart({
  computedData,
}: {
  computedData: Array<any>;
}) {
  const { height, width } = useWindowDimensions();

  const options: ChartOptions = {
    animation: {
      duration: 400,
      easing: "easeOutCirc",
    },
    plugins: {
      title: {
        display: false,
        text: "Empreinte carbone (kgCO2eq)",
        color: "#475569",
        font: { weight: "500" },
        position: "bottom",
      },
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title(items: any) {
            return items[1]
              ? items[1].raw._data.children[0].name
              : items[0].raw._data.children[0].category;
          },
          label(item: any) {
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

  const config: ChartConfiguration = {
    type: "treemap",
    data: {
      datasets: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        {
          tree: computedData,
          key: "size",
          groups: ["category", "size"],
          labels: {
            display: true,
            color: "white",
            formatter: (context: any) => [
              context.raw._data.children[0].name,
              Math.floor(context.raw._data.children[0].size),
            ],
          },
          captions: {
            display: false,
          },
          spacing: 0,
          borderRadius: 0,
          backgroundColor(context: any) {
            if (context.type !== "data") {
              return "transparent";
            }
            const index = context.dataIndex;
            if (
              context.dataset.data[index]._data.children.length > 1 &&
              isNaN(context.dataset.data[index]._data.label)
            ) {
              return "transparent";
            }

            return color(
              getCategoryColor(
                context.dataset.data[index]._data.children[0].category
              )
            )
              .alpha(
                (1 +
                  Math.log(
                    context.dataset.data[index]._data.children[0].size
                  )) /
                  13
              )
              .rgbString();
          },
        },
      ],
    },
  };

  const maxWidthSize = width > 800 ? 80 : 100;
  return (
    <div
      className={`chart-container mx-auto max-w-full`}
      style={{
        width:
          (totalSize > 14000
            ? maxWidthSize
            : 20 + Math.floor((maxWidthSize - 20) * (totalSize / 14000))) + "%",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <Chart type="treemap" data={config.data} options={options} />
    </div>
  );
}
