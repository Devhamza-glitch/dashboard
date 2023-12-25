import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import DBHome from "./components/db-home/DBHome";
import Customer from "./components/customer/Customer";
import Harvey from "./components/harvey/Harvey";

import "primeicons/primeicons.css";
import Login from "./pages/Login";
import CustomerDetails from "./components/customer/CustomerDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DBHome />} />
          <Route path="customer" element={<Customer />} />
          <Route path="customer/:id" element={<CustomerDetails />} />
          <Route path="harvey" element={<Harvey />} />
          <Route index element={<Navigate to="/login" />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
