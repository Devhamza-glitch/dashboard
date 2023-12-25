import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

function Customer() {
  const dummyData = [
    {
      contactid: "00QNu000005apUqMAI",
      firstname: "Erik",
      lastname: "Brown",
      contact_email: "erik.brown@wholefoods.com",
      contact_phone: "+17748434750",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "booked",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004uj9vMAA",
      firstname: "Kurt",
      lastname: "Bayliss",
      contact_email: "kurt.bayliss@fullharvest.com",
      contact_phone: "+13177094486",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004v3GeMAI",
      firstname: "Tynesha",
      lastname: "Cummings",
      contact_email: "info@renewyourtemple.live",
      contact_phone: "+15513995069",
      type: "Buyer",
      campaign: "outbound_harvey",
      status: "booked",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004pqqIMAQ",
      firstname: "Mark",
      lastname: "R",
      contact_email: "setters.rentals@gmail.com",
      contact_phone: "+13152141712",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004scPNMAY",
      firstname: "Nancy",
      lastname: "Dudney",
      contact_email: "nancy@patagoniaorchardsllc.com",
      contact_phone: "+15208203190",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004raO5MAI",
      firstname: "Daisy",
      lastname: "Bell",
      contact_email: "msasdj@gmail.com",
      contact_phone: "+13128377534",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004rcwCMAQ",
      firstname: "Will",
      lastname: "Elliott",
      contact_email: "willcelliott13@gmail.com",
      contact_phone: "+12315904833",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004to6jMAA",
      firstname: "Paula",
      lastname: "towe",
      contact_email: "paula@farmfaregrocery.com",
      contact_phone: "+18646999479",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004ygV8MAI",
      firstname: "juan",
      lastname: "gomez",
      contact_email: "juan.yahoo@yahoo.com",
      contact_phone: "+14078965470",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004vvdfMAA",
      firstname: "Raymond",
      lastname: "Williams",
      contact_email: "kippyrays@gmail.com",
      contact_phone: "+13025935812",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004txYEMAY",
      firstname: "Gail",
      lastname: "Arias",
      contact_email: "gailsgardenbakery@gmail.com",
      contact_phone: "+17042420692",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu0000050MdaMAE",
      firstname: "Caleb",
      lastname: "Savory",
      contact_email: "calebdc1997@gmail.com",
      contact_phone: "+12146093739",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000005apUqMAI",
      firstname: "Erik",
      lastname: "Brown",
      contact_email: "erik.brown@wholefoods.com",
      contact_phone: "+17748434750",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "booked",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004uj9vMAA",
      firstname: "Kurt",
      lastname: "Bayliss",
      contact_email: "kurt.bayliss@fullharvest.com",
      contact_phone: "+13177094486",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004v3GeMAI",
      firstname: "Tynesha",
      lastname: "Cummings",
      contact_email: "info@renewyourtemple.live",
      contact_phone: "+15513995069",
      type: "Buyer",
      campaign: "outbound_harvey",
      status: "booked",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004pqqIMAQ",
      firstname: "Mark",
      lastname: "R",
      contact_email: "setters.rentals@gmail.com",
      contact_phone: "+13152141712",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004scPNMAY",
      firstname: "Nancy",
      lastname: "Dudney",
      contact_email: "nancy@patagoniaorchardsllc.com",
      contact_phone: "+15208203190",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004raO5MAI",
      firstname: "Daisy",
      lastname: "Bell",
      contact_email: "msasdj@gmail.com",
      contact_phone: "+13128377534",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004rcwCMAQ",
      firstname: "Will",
      lastname: "Elliott",
      contact_email: "willcelliott13@gmail.com",
      contact_phone: "+12315904833",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004to6jMAA",
      firstname: "Paula",
      lastname: "towe",
      contact_email: "paula@farmfaregrocery.com",
      contact_phone: "+18646999479",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004ygV8MAI",
      firstname: "juan",
      lastname: "gomez",
      contact_email: "juan.yahoo@yahoo.com",
      contact_phone: "+14078965470",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004vvdfMAA",
      firstname: "Raymond",
      lastname: "Williams",
      contact_email: "kippyrays@gmail.com",
      contact_phone: "+13025935812",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004txYEMAY",
      firstname: "Gail",
      lastname: "Arias",
      contact_email: "gailsgardenbakery@gmail.com",
      contact_phone: "+17042420692",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu0000050MdaMAE",
      firstname: "Caleb",
      lastname: "Savory",
      contact_email: "calebdc1997@gmail.com",
      contact_phone: "+12146093739",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },  {
      contactid: "00QNu000005apUqMAI",
      firstname: "Erik",
      lastname: "Brown",
      contact_email: "erik.brown@wholefoods.com",
      contact_phone: "+17748434750",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "booked",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004uj9vMAA",
      firstname: "Kurt",
      lastname: "Bayliss",
      contact_email: "kurt.bayliss@fullharvest.com",
      contact_phone: "+13177094486",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004v3GeMAI",
      firstname: "Tynesha",
      lastname: "Cummings",
      contact_email: "info@renewyourtemple.live",
      contact_phone: "+15513995069",
      type: "Buyer",
      campaign: "outbound_harvey",
      status: "booked",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004pqqIMAQ",
      firstname: "Mark",
      lastname: "R",
      contact_email: "setters.rentals@gmail.com",
      contact_phone: "+13152141712",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004scPNMAY",
      firstname: "Nancy",
      lastname: "Dudney",
      contact_email: "nancy@patagoniaorchardsllc.com",
      contact_phone: "+15208203190",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004raO5MAI",
      firstname: "Daisy",
      lastname: "Bell",
      contact_email: "msasdj@gmail.com",
      contact_phone: "+13128377534",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004rcwCMAQ",
      firstname: "Will",
      lastname: "Elliott",
      contact_email: "willcelliott13@gmail.com",
      contact_phone: "+12315904833",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004to6jMAA",
      firstname: "Paula",
      lastname: "towe",
      contact_email: "paula@farmfaregrocery.com",
      contact_phone: "+18646999479",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004ygV8MAI",
      firstname: "juan",
      lastname: "gomez",
      contact_email: "juan.yahoo@yahoo.com",
      contact_phone: "+14078965470",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004vvdfMAA",
      firstname: "Raymond",
      lastname: "Williams",
      contact_email: "kippyrays@gmail.com",
      contact_phone: "+13025935812",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004txYEMAY",
      firstname: "Gail",
      lastname: "Arias",
      contact_email: "gailsgardenbakery@gmail.com",
      contact_phone: "+17042420692",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu0000050MdaMAE",
      firstname: "Caleb",
      lastname: "Savory",
      contact_email: "calebdc1997@gmail.com",
      contact_phone: "+12146093739",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },  {
      contactid: "00QNu000005apUqMAI",
      firstname: "Erik",
      lastname: "Brown",
      contact_email: "erik.brown@wholefoods.com",
      contact_phone: "+17748434750",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "booked",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004uj9vMAA",
      firstname: "Kurt",
      lastname: "Bayliss",
      contact_email: "kurt.bayliss@fullharvest.com",
      contact_phone: "+13177094486",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004v3GeMAI",
      firstname: "Tynesha",
      lastname: "Cummings",
      contact_email: "info@renewyourtemple.live",
      contact_phone: "+15513995069",
      type: "Buyer",
      campaign: "outbound_harvey",
      status: "booked",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004pqqIMAQ",
      firstname: "Mark",
      lastname: "R",
      contact_email: "setters.rentals@gmail.com",
      contact_phone: "+13152141712",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004scPNMAY",
      firstname: "Nancy",
      lastname: "Dudney",
      contact_email: "nancy@patagoniaorchardsllc.com",
      contact_phone: "+15208203190",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004raO5MAI",
      firstname: "Daisy",
      lastname: "Bell",
      contact_email: "msasdj@gmail.com",
      contact_phone: "+13128377534",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: false,
    },
    {
      contactid: "00QNu000004rcwCMAQ",
      firstname: "Will",
      lastname: "Elliott",
      contact_email: "willcelliott13@gmail.com",
      contact_phone: "+12315904833",
      type: "Supplier",
      campaign: "harvey_supplier",
      status: "Open",
      gepeto_switch: true,
    },
    {
      contactid: "00QNu000004to6jMAA",
      firstname: "Paula",
      lastname: "towe",
      contact_email: "paula@farmfaregrocery.com",
      contact_phone: "+18646999479",
      type: "Buyer",
      campaign: "harvey_buyer",
      status: "Open",
      gepeto_switch: true,
    },
  ];
  const [contactId, setContactId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [campaign, setCampaign] = useState("");
  const [status, setStatus] = useState("");
  const [gepeto, setGepeto] = useState("");


  const nameBodyTemplate = (rowData) => {
    return `${rowData.firstname} ${rowData.lastname}`;
  };
  const statusBodyTemplate = (rowData) => {
    return rowData.status == 'booked' ? "Booked": "Not Booked"
  };
  const campaignBodyTemplate = (rowData) => {
    if (rowData.campaign == 'harvey_buyer'){
      return 'Harvey Buyer'
    }
    if (rowData.campaign == 'harvey_supplier'){
      return 'Harvey Supplier'
    }
    if (rowData.campaign == 'outbound_harvey'){
      return 'Harvey OutBound'
    }
  };
  const switchBodyTemplate = (rowData) => {
    return rowData.gepeto_switch === true 
        ? <i className="pi pi-check-circle" style={{ color: 'green' }}></i> 
        : <i className="pi pi-check-circle" style={{ color: 'red' }}></i>;
};
  return (
    <div>
      {/* Search filters */}
      <div className="mb-3 flex gap-3 ">
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
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 30, 40]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        className="bg-white p-4 text-sm"
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
        field="contactid"
        header="ContactId"
        headerClassName="pb-4"
      ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          body={nameBodyTemplate}
          header="Name"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="contact_phone"
          header="PhoneNo"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field="type"
          header="Type"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          field={campaignBodyTemplate}
          header="Campaign"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          body = {statusBodyTemplate}
          header="Status"
          headerClassName="pb-4"
        ></Column>
        <Column
          className="border-t-[1px] border-gray-200 p-4"
          body ={switchBodyTemplate}
          header="Switch"
          headerClassName="pb-4"
        ></Column>
      </DataTable>
    </div>
  );
}

export default Customer;
