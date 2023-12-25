import React from "react";

const userDetails = [
  { name: "Contact id", value: "00QNu000004rcwCMAQ" },
  { name: "Name", value: "John Doe" },
  { name: "Email", value: "john.doe@example.com" },
  { name: "Phone", value: "+1234567890" },
  { name: "Type", value: "Buyer" },
  { name: "Campaign", value: "harvey_buyer" },
  { name: "Status", value: "Open" },
  { name: "Switch", value: true },
  { name: "Company", value: "ABC Inc." },
];

function CustomerDetails() {
  return (
    <>
      <div className="mb-8 mr-3 flex items-center justify-between">
        <h1 className="font-bold">Customer Details</h1>
      </div>
      <div className="mb-7 grid grid-cols-[2fr_1fr] items-start gap-7">
        {/* 01: Customer details */}
        <div className="grid  grid-cols-[2fr_1fr] rounded-2xl bg-white p-5 shadow-dbWidget">
          {userDetails.map((detail, i) => (
            <div key={i} className="mb-4">
              {detail.name === "Switch" ? (
                <>
                  <h3 className="text-sm capitalize mb-1">{detail.name}</h3>
                  {detail.value ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                      <i className="pi pi-check text-xs font-extrabold text-white"></i>
                    </span>
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                      <i className="pi pi-times text-xs font-extrabold text-white"></i>
                    </span>
                  )}
                </>
              ) : (
                <>
                  <h3 className="text-sm capitalize">{detail.name}</h3>
                  <h6 className="text font-medium">{detail.value}</h6>
                </>
              )}
            </div>
          ))}
        </div>
        {/* 02: Message Counter */}
        <div className="rounded-2xl  bg-white p-5 shadow-dbWidget">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-medium capitalize">Messages</h3>
            <div className="flex justify-center gap-3">
              <span className="flex items-center justify-center gap-2">
                <h6 className="text-xl">658</h6>
              </span>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium capitalize">inbound</h3>
            <div className="flex justify-center gap-3">
              <span className="flex items-center justify-center gap-2">
                <h6 className="text-small">197</h6>
              </span>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium capitalize">outbound</h3>
            <div className="flex justify-center gap-3">
              <span className="flex items-center justify-center gap-2">
                <h6 className="text-small">461</h6>
              </span>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium capitalize">initial</h3>
            <div className="flex justify-center gap-3">
              <span className="flex items-center justify-center gap-2">
                <h6 className="text-small">123</h6>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;
