import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { TabMenu } from "primereact/tabmenu";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
import { Link, useNavigate } from "react-router-dom";
import { getAllContacts } from "../../../api";

function Customer() {
  const [contactId, setContactId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [campaign, setCampaign] = useState("");
  const [status, setStatus] = useState("");
  const [gepeto, setGepeto] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dummyData, setDummyData] = useState([]);

  const nameBodyTemplate = (rowData) => {
    return `${rowData.firstname} ${rowData.lastname}`;
  };

  const statusBodyTemplate = (rowData) => {
    return rowData.status == "booked" ? "Booked" : "Not Booked";
  };
  const campaignBodyTemplate = (rowData) => {
    if (rowData.campaign == "harvey_buyer") {
      return "Harvey Buyer";
    }
    if (rowData.campaign == "harvey_supplier") {
      return "Harvey Supplier";
    }
    if (rowData.campaign == "outbound_harvey") {
      return "Harvey OutBound";
    }
  };
  const switchBodyTemplate = (rowData) => {
    return (
      <span className="flex justify-center">
        {rowData.gepeto_switch === true ? (
          <i className="pi pi-check-circle" style={{ color: "green" }}></i>
        ) : (
          <i className="pi pi-check-circle" style={{ color: "red" }}></i>
        )}
      </span>
    );
  };
  const renderSwitchColumn = (rowData) => {
    const isSwitchOn = rowData.gepeto_switch;

    return (
      <div className="flex justify-center">
        {isSwitchOn ? (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
            <i className="pi pi-check text-xs font-extrabold text-white"></i>
          </span>
        ) : (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
            <i className="pi pi-times text-xs font-extrabold text-white"></i>
          </span>
        )}
      </div>
    );
  };

  const actionHeaderTemplate = (rowData) => (
    <Link
      to={`${rowData.contactid}`}
      className="inline-block rounded-md bg-primary px-4 py-2 font-medium text-white"
    >
      Open
    </Link>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const page = 1;
        const result = await getAllContacts(
          page,
          contactId,
          name,
          email,
          phone,
        );
        setDummyData(result.contacts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contactId, name, email]);
  return (
    <div>
      {/* Search filters */}
      <div className="mb-8 mr-3 flex items-center justify-between pl-2 pt-4">
        <h1 className="font-bold">Customers</h1>
        <div className="flex flex-1 justify-end">
          <CustomTabMenu
            model={items}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            pt={{
              menuitem: "bg-white",
            }}
          />
        </div>
      </div>
      <div className="mb-8 flex flex-wrap gap-3 ">
        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="ContactId"
            value={contactId}
            onChange={(e) => setContactId(e.target.value)}
          />
        </span>

        <span className="flex items-center gap-1 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>

        <span className="flex items-center gap-1 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>

        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </span>
        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </span>

        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Campaign"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
          />
        </span>

        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </span>
        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Switch"
            value={gepeto}
            onChange={(e) => setGepeto(e.target.value)}
          />
        </span>
      </div>
      <DataTable
        value={dummyData}
        loading={loading}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 30, 40]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        className="bg-white p-4 text-sm"
        pt={{
          wrapper: "mb-4",
          paginator: {
            root: "flex items-center justify-start flex-wrap bg-white text-gray-500 border-0 px-4 py-2 rounded-md",
            firstPageButton:
              "relative inline-flex items-center justify-center user-none overflow-hidden leading-none border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md transition duration-200",
            prevPageButton:
              "relative inline-flex items-center justify-center user-none overflow-hidden leading-none border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md transition duration-200",
            nextPageButton:
              "relative inline-flex items-center justify-center user-none overflow-hidden leading-none border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md transition duration-200",
            RPPDropdown: {
              root: "inline-flex relative cursor-pointer user-none bg-white border rounded-md transition duration-200 h-12 mx-2",
              input:
                "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0 focus:outline-none focus:outline-offset-0',",
              trigger:
                "flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md",
              panel:
                "bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]",
              wrapper: "overflow-auto",
              list: "m-0 p-0 py-3 list-none",
              item: "relative font-normal cursor-pointer space-nowrap overflow-hidden m-0 py-3 px-5 border-none text-gray-600 rounded-none transition duration-200",
            },

            JTPInput: {
              root: "inline-flex mx-2",

              input:
                "font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300",
            },
          },
        }}
      >
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="contactid"
          header="ContactId"
          headerClassName="pb-4 pl-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          body={nameBodyTemplate}
          header="Name"
          headerClassName="pb-4 pl-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="contact_phone"
          header="PhoneNo"
          headerClassName="pb-4 pl-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="type"
          header="Type"
          headerClassName="pb-4 pl-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field={campaignBodyTemplate}
          header="Campaign"
          headerClassName="pb-4 pl-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          body={statusBodyTemplate}
          header="Status"
          headerClassName="pb-4 pl-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          body={switchBodyTemplate}
          header="Switch"
          headerClassName="pb-4 pl-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          header="Action"
          headerClassName="pb-4 pl-4"
          body={actionHeaderTemplate}
        ></Column>
      </DataTable>
    </div>
  );
}

export default Customer;
