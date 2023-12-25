import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllContacts, getContactsMessages } from "../../../api";
import { ProgressSpinner } from "primereact/progressspinner";
import styled from "styled-components";

const ChatWidget = styled.div`
  background-color: white;
  padding: 16px;
  overflow-y: auto;
  max-height: 80vh;

  /* Custom Scrollbar Styles */
  scrollbar-width: thin;
  scrollbar-color: #6b7280 #f1f1f1;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b7280;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #4b5563;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-corner {
    background-color: #f1f1f1;
  }
`;

const ChatBubble = styled.div`
  position: relative;
  max-width: 50%;
  width: fit-content;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;

  ${(props) =>
    props.direction === "inbound"
      ? "align-self: flex-start; background-color: #48bb78;"
      : "align-self: flex-end; background-color: #d1d5db;"}
`;

function CustomerDetails() {
  const [customerData, setCustomerData] = useState(null);
  const [messagesData, setMessagesData] = useState([]);
  const [dataCount, setDataCount] = useState({
    msgsCount: "",
    inboundCount: "",
    outBoundCount: "",
    initialCount: "",
  });
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log("msg", messagesData);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const page = 1;
        const customerContactId = location.pathname.split("/").pop();
        const dataResult = await getAllContacts(page, customerContactId);
        const messagesResult = await getContactsMessages(
          page,
          customerContactId,
        );

        setDataCount({
          msgsCount: messagesResult.messages,
          inboundCount: messagesResult.inbound,
          outBoundCount: messagesResult.outbound,
          initialCount: messagesResult.initial,
        });
        setMessagesData(messagesResult.data);
        setCustomerData(dataResult.contacts[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [location.pathname]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ProgressSpinner
          className="h-6 w-6 text-primary"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 mr-3 flex items-center justify-between">
        <h1 className="font-bold">Customer Details</h1>
      </div>
      <div className="mb-8 grid grid-cols-[2fr_1fr] items-start gap-7">
        {/* 01: Customer details */}
        <div className="grid grid-cols-[2fr_1fr] rounded-2xl bg-white p-5 shadow-dbWidget">
          {customerData &&
            Object.entries(customerData).map(([key, value], i) => (
              <div key={i} className="mb-4">
                {key === "gepeto_switch" ? (
                  <>
                    <h3 className="mb-1 text-sm capitalize">Switch</h3>
                    {value ? (
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
                    <h3 className="text-sm capitalize">{key}</h3>
                    <h6 className="text font-medium">{value}</h6>
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
                <h6 className="text-xl">{dataCount.msgsCount}</h6>
              </span>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium capitalize">inbound</h3>
            <div className="flex justify-center gap-3">
              <span className="flex items-center justify-center gap-2">
                <h6 className="text-small">{dataCount.inboundCount}</h6>
              </span>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium capitalize">outbound</h3>
            <div className="flex justify-center gap-3">
              <span className="flex items-center justify-center gap-2">
                <h6 className="text-small">{dataCount.outBoundCount}</h6>
              </span>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-medium capitalize">initial</h3>
            <div className="flex justify-center gap-3">
              <span className="flex items-center justify-center gap-2">
                <h6 className="text-small">{dataCount.initialCount}</h6>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Chat Widget */}
      <ChatWidget>
        {/* <h3 className="bg-primary p-4 text-white text-center">Recent Chat</h3> */}
        {messagesData.map((msg, i) => (
          <div key={i} className="flex flex-col gap-3 p-2">
            <ChatBubble direction={msg.direction}>{msg.body}</ChatBubble>
          </div>
        ))}
      </ChatWidget>
    </>
  );
}

export default CustomerDetails;
