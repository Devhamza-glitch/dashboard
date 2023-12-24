import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { TabMenu } from "primereact/tabmenu";
import styled from "styled-components";

const widgetsData = [
  {
    messages: 658,
    inbound: 197,
    outbound: 461,
  },
  {
    contacts: 158,
    buyer: 120,
    supplier: 38,
  },
  {
    booked: 6,
    buyer: 2,
    supplier: 4,
  },
];

const items = [
  { label: "24h" },
  { label: "7 days" },
  { label: "30 days" },
  { label: "YTD" },
  { label: "All" },
];

const CustomTabMenu = styled(TabMenu)`
  background-color: transparent;
  font-family: "Poppins";

  .p-tabmenuitem.p-highlight {
    background-color: #28784c;
    .p-menuitem-link {
      color: #fff;
    }
  }
`;

function DBHome() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary",
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-bold">Welcome to Your Dashboard!</h1>
        <div className="flex flex-1 justify-end">
          <CustomTabMenu
            model={items}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            pt={{
              menuitem: "p-4 bg-white",
            }}
          />
        </div>
      </div>
      <div className="mb-7 grid grid-cols-3 gap-7">
        {widgetsData.map((widget, i) => (
          <div key={i} className="shadow-dbWidget rounded-xl bg-white p-5">
            <div>
              {Object.entries(widget).map(([key, value]) => (
                <div
                  key={key}
                  className="mb-2 flex items-center justify-between"
                >
                  <h3 className="font-medium capitalize">{key}</h3>
                  <div className="flex justify-center gap-3">
                    <span className="flex items-center justify-center gap-2">
                      <h6 className="text-2xl font-semibold">{value}</h6>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-5">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </>
  );
}

export default DBHome;
