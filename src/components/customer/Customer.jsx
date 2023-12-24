import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

function Customer() {
  const dummyData = [
    {
      fName: "John",
      lName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      campaign: "Spring Sale",
      status: "Active",
    },
    {
      fName: "Jane",
      lName: "Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      campaign: "Summer Promotion",
      status: "Inactive",
    },
    {
      fName: "Alice",
      lName: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-123-4567",
      campaign: "Back to School",
      status: "Active",
    },
    {
      fName: "Bob",
      lName: "Williams",
      email: "bob.williams@example.com",
      phone: "111-222-3333",
      campaign: "Holiday Special",
      status: "Inactive",
    },
    {
      fName: "Eva",
      lName: "Anderson",
      email: "eva.anderson@example.com",
      phone: "333-444-5555",
      campaign: "Fall Discount",
      status: "Active",
    },
    {
      fName: "Michael",
      lName: "Brown",
      email: "michael.brown@example.com",
      phone: "777-888-9999",
      campaign: "New Year Sale",
      status: "Inactive",
    },
    {
      fName: "Sophia",
      lName: "Taylor",
      email: "sophia.taylor@example.com",
      phone: "999-888-7777",
      campaign: "Spring Clearance",
      status: "Active",
    },
    {
      fName: "James",
      lName: "Miller",
      email: "james.miller@example.com",
      phone: "444-555-6666",
      campaign: "Summer Flash Sale",
      status: "Inactive",
    },
    {
      fName: "Olivia",
      lName: "Clark",
      email: "olivia.clark@example.com",
      phone: "666-777-8888",
      campaign: "Black Friday",
      status: "Active",
    },
    {
      fName: "William",
      lName: "Turner",
      email: "william.turner@example.com",
      phone: "222-111-0000",
      campaign: "Cyber Monday",
      status: "Inactive",
    },
    {
      fName: "Emma",
      lName: "Moore",
      email: "emma.moore@example.com",
      phone: "123-987-6543",
      campaign: "Holiday Countdown",
      status: "Active",
    },
    {
      fName: "Daniel",
      lName: "Baker",
      email: "daniel.baker@example.com",
      phone: "321-654-9870",
      campaign: "Winter Warm-Up",
      status: "Inactive",
    },
    {
      fName: "Ava",
      lName: "Hill",
      email: "ava.hill@example.com",
      phone: "456-789-0123",
      campaign: "Spring Fever",
      status: "Active",
    },
    {
      fName: "Jackson",
      lName: "Cooper",
      email: "jackson.cooper@example.com",
      phone: "789-012-3456",
      campaign: "End of Year Sale",
      status: "Inactive",
    },
    {
      fName: "Mia",
      lName: "Lopez",
      email: "mia.lopez@example.com",
      phone: "555-666-7777",
      campaign: "Summer Blowout",
      status: "Active",
    },
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [campaign, setCampaign] = useState("");

  return (
    <div>
      {/* Search filters */}
      <div className="mb-3 flex gap-3 ">
        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </span>

        <span className="flex items-center gap-2 bg-white p-3">
          <i className="pi pi-search" />
          <InputText
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </span>

        <span className="flex items-center gap-2 bg-white p-3">
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
            placeholder="Campaign"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
          />
        </span>
      </div>
      <DataTable
        value={dummyData}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 30, 40]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        className="bg-white p-7"
        pt={{
          thead: "",
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
          field="fName"
          header="First Name"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="lName"
          header="Last Name"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="email"
          header="Email"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="phone"
          header="Phone"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="campaign"
          header="Campaign"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="status"
          header="Status"
          headerClassName="pb-4"
        ></Column>
      </DataTable>
    </div>
  );
}

export default Customer;
