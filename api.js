import { createClient } from "@supabase/supabase-js";
import moment from "moment-timezone";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDays(days) {
  const ctTimezone = "America/Chicago";
  const utcTimezone = "UTC";
  const currentTime = moment().tz(ctTimezone);
  let fromDate;

  if (days === "daily") {
    fromDate = currentTime
      .subtract(1, "days")
      .tz(utcTimezone)
      .format("YYYY-MM-DD HH:mm:ss.SSSSSSZ");
  } else if (days === "weekly") {
    fromDate = currentTime
      .subtract(7, "days")
      .tz(utcTimezone)
      .format("YYYY-MM-DD HH:mm:ss.SSSSSSZ");
  }
  return fromDate ? fromDate : null;
}

export async function getMessageCounts(days) {
  const fromDate = await getDays(days);
  console.log("date", fromDate);
  const dateFilter = (query) =>
    fromDate ? query.gte("created_at", fromDate) : query;

  const allMessagesQuery = supabase.from("messages").select("*");
  const allMessagesCount = await dateFilter(allMessagesQuery);

  const allInboundQuery = supabase
    .from("messages")
    .select("*")
    .eq("direction", "inbound");
  const allInboundCount = await dateFilter(allInboundQuery);

  const allOutboundQuery = supabase
    .from("messages")
    .select("*")
    .eq("direction", "outbound")
    .neq("type", "initial_text");
  const allOutboundCount = await dateFilter(allOutboundQuery);

  const allInitialQuery = supabase
    .from("messages")
    .select("*")
    .eq("direction", "outbound")
    .eq("type", "initial_text");
  const allInitialCount = await dateFilter(allInitialQuery);

  return {
    messages: allMessagesCount.data ? allMessagesCount.data.length : 0,
    inbound: allInboundCount.data ? allInboundCount.data.length : 0,
    outbound: allOutboundCount.data ? allOutboundCount.data.length : 0,
    initial: allInitialCount.data ? allInitialCount.data.length : 0,
  };
}

export async function getContactsCounts(days) {
  const fromDate = await getDays(days);
  const dateFilter = (query) =>
    fromDate ? query.gte("created_at", fromDate) : query;

  const allContactsQuery = supabase
    .from("contacts")
    .select("*")
    .neq("contact_phone", "N/A");
  const allContactsCount = await dateFilter(allContactsQuery);

  const allBuyerQuery = supabase
    .from("contacts")
    .select("*")
    .neq("contact_phone", "N/A")
    .eq("type", "Buyer");
  const allBuyerCount = await dateFilter(allBuyerQuery);

  const allSupplierQuery = supabase
    .from("contacts")
    .select("*")
    .eq("type", "Supplier")
    .neq("contact_phone", "N/A");
  const allSupplierCount = await dateFilter(allSupplierQuery);

  const allOutboundQuery = supabase
    .from("contacts")
    .select("*")
    .eq("type", "OutBound")
    .neq("contact_phone", "N/A");
  const allOutboundCount = await dateFilter(allOutboundQuery);

  return {
    contacts: allContactsCount.data ? allContactsCount.data.length : 0,
    buyer: allBuyerCount.data ? allBuyerCount.data.length : 0,
    supplier: allSupplierCount.data ? allSupplierCount.data.length : 0,
    outbound: allOutboundCount.data ? allOutboundCount.data.length : 0,
  };
}

export async function getBookingContactsCount(days) {
  const fromDate = await getDays(days);
  const dateFilter = (query) =>
    fromDate ? query.gte("created_at", fromDate) : query;

  const allContactsQuery = supabase
    .from("contacts")
    .select("*")
    .neq("contact_phone", "N/A")
    .eq("status", "booked");
  const allContactsCount = await dateFilter(allContactsQuery);

  const allBuyerQuery = supabase
    .from("contacts")
    .select("*")
    .neq("contact_phone", "N/A")
    .eq("type", "Buyer")
    .eq("status", "booked");
  const allBuyerCount = await dateFilter(allBuyerQuery);

  const allSupplierQuery = supabase
    .from("contacts")
    .select("*")
    .neq("contact_phone", "N/A")
    .eq("type", "Supplier")
    .eq("status", "booked");
  const allSupplierCount = await dateFilter(allSupplierQuery);

  const allOutboundQuery = supabase
    .from("contacts")
    .select("*")
    .neq("contact_phone", "N/A")
    .eq("type", "Outbound")
    .eq("status", "booked");
  const allOutboundCount = await dateFilter(allOutboundQuery);

  return {
    booked: allContactsCount.data ? allContactsCount.data.length : 0,
    buyer: allBuyerCount.data ? allBuyerCount.data.length : 0,
    supplier: allSupplierCount.data ? allSupplierCount.data.length : 0,
    outbound: allOutboundCount.data ? allOutboundCount.data.length : 0,
  };
}

export async function getAllContacts(
  page,
  contactId = null,
  name = null,
  email = null,
  phone = null,
) {
  let query = supabase
    .from("contacts")
    .select(
      "contactid, firstname, lastname, contact_email, contact_phone, type, campaign, status, gepeto_switch, companyname",
      { count: "exact" },
    )
    .neq("contact_phone", "N/A");

  if (name !== null) {
    query = query.ilike("firstname", `%${name}%`);
  }
  if (contactId !== null) {
    query = query.ilike("contactid", `%${contactId}%`);
  }
  if (email !== null) {
    query = query.ilike("contact_email", `%${email}%`);
  }
  if (phone !== null) {
    query = query.ilike("contact_phone", `%${phone}%`);
  }

  let { limit, offset } = await pagination(page);
  console.log("page", page);
  console.log("limit", limit);
  console.log("offset", offset);

  const { data, count, error } = await query
    .order("created_at", { ascending: false })
    .range(offset, limit);

  if (error) {
    console.error(error);
    return { contacts: [], count: 0 };
  }

  return {
    contacts: data,
    count: count,
  };
}

export async function getContactsMessages(page, contactId) {
  let { limit, offset } = await pagination(page);
  console.log("page", page);
  console.log("limit", limit);
  console.log("offset", offset);

  let messages = await supabase
    .from("messages")
    .select("*", { count: "exact" })
    .eq("contactid", contactId)
    .order("created_at", { ascending: false })
    .range(offset, limit);

  let inbound = await supabase
    .from("messages")
    .select("*", { count: "exact" })
    .eq("contactid", contactId)
    .eq("type", "inquiry");

  let outbound = await supabase
    .from("messages")
    .select("*", { count: "exact" })
    .eq("contactid", contactId)
    .eq("type", "response");

  let initial = await supabase
    .from("messages")
    .select("*", { count: "exact" })
    .eq("contactid", contactId)
    .eq("type", "initial_text");
  return {
    data: messages?.data ?? [],
    messages: messages?.count ?? 0,
    inbound: inbound.count ?? 0,
    outbound: outbound.count ?? 0,
    initial: initial.count ?? 0,
  };
}

const pagination = async (page) => {
  let limit = 10;
  let offset = 0;

  if (page > 1) {
    offset = limit * (parseInt(page) - 1);
    limit = offset + limit;
  }
  return { limit, offset };
};
export const check = async () => {
  // dashboard api
  // params are daily/weekly/all for now and all will be on default
  console.log("messages", await getMessageCounts("weekly"));
  console.log("contacts", await getContactsCounts("daily"));
  console.log("booking", await getBookingContactsCount("weekly"));
  // pagination start from 1
  // customer apis
  console.log("allcustomers", await getAllContacts(1));
  console.log("messages", await getContactsMessages(1, "0031U00001UNLmxQAH"));
};

// check();
