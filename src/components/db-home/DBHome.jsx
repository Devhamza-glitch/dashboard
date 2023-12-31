import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { TabMenu } from "primereact/tabmenu";
import { Skeleton } from "primereact/skeleton";
import styled from "styled-components";
import {
  getBookingContactsCount,
  getContactsCounts,
  getMessageCounts,
  getDays,
} from "../../../api";

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
  font-size: 12px;
  border-radius: 12px;

  .p-tabmenuitem.p-highlight {
    background-color: #28784c;
    .p-menuitem-link {
      color: #fff;
    }
  }
  .p-menuitem-link {
    padding: 12px;
  }
`;

function DBHome() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [widData, setWidData] = useState([]);

  async function getDataPerDuration(e) {
    const newIndex = e.index;

    if (newIndex === activeIndex) {
      return;
    }

    setActiveIndex(e.index);
    const selectedOption = items[e.index];
    const days = getDays(selectedOption.label);
    try {
      setWidData([]);
      const messagesResponse = await getMessageCounts(days);

      const contactsResponse = await getContactsCounts(days);

      const bookingResponse = await getBookingContactsCount(days);

      setWidData([messagesResponse, contactsResponse, bookingResponse]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
    const fetchData = async () => {
      try {
        const messagesResponse = await getMessageCounts();

        const contactsResponse = await getContactsCounts();

        const bookingResponse = await getBookingContactsCount();

        setWidData([messagesResponse, contactsResponse, bookingResponse]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <>
      <div className="mb-8 mr-3 flex items-center justify-between">
        <h1 className="font-bold">Welcome to Your Dashboard!</h1>
        <div className="flex flex-1 justify-end">
          <CustomTabMenu
            model={items}
            activeIndex={activeIndex}
            onTabChange={getDataPerDuration}
            pt={{
              menuitem: "bg-white",
            }}
          />
        </div>
      </div>
      <div className="mb-7 mr-3 grid grid-cols-3 gap-7">
        {widData && widData.length > 0 ? (
          widData.map((widget, i) => (
            <div key={i} className="rounded-xl bg-white p-5 shadow-dbWidget">
              <div>
                {Object.entries(widget).map(([key, value], index) => (
                  <div
                    key={key}
                    className="mb-2 flex items-center justify-between"
                    style={{ fontSize: index === 0 ? "20px" : "13px" }}
                  >
                    <h3 className="font-medium capitalize">{key}</h3>
                    <div className="flex justify-center gap-3">
                      <span className="flex items-center justify-center gap-2">
                        <h6 className="text-small">
                          {value >= 0 && value <= 9 ? `0${value}` : value}
                        </h6>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="">
                <Skeleton
                  width="10rem"
                  className="mb-2  rounded-xl after:bg-primary"
                ></Skeleton>
                <Skeleton
                  width="5rem"
                  className="mb-2 rounded-xl after:bg-primary"
                ></Skeleton>
                <Skeleton
                  width="2rem"
                  className="w-4 rounded-xl after:bg-primary"
                ></Skeleton>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mr-3 rounded-2xl  bg-white p-5 shadow-dbWidget">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </>
  );
}

export default DBHome;
