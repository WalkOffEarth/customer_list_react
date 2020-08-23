import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./custInventoryContainer.css";
import {
  getCustomers,
  getCustomerDetails,
} from "./action/custInventory.action";
import { CustomerList } from "../components/CustomerList";
import { CustomerDetails } from "../components/CustomerDetails";

export const inventoryContext = createContext(null);

function CustInventoryContainer() {
  const customers = useSelector((state) => state.customers);
  const customerDetails = useSelector((state) => state.customerDetails);
  const selectedCustId = useSelector((state) => state.selectedCustId);
  const dispatch = useDispatch();
  const onCustomerClick = (id) => {
    dispatch(getCustomerDetails(id));
  };
  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  return (
    <div className="container">
      <header className="header">Customers</header>
      <main className="body">
        <aside className="listPanel">
          <inventoryContext.Provider
            value={{ selectedCustId, onCustomerClick }}
          >
            <CustomerList customers={customers}></CustomerList>
          </inventoryContext.Provider>
        </aside>
        <section className="detailsPanel">
          <CustomerDetails details={customerDetails}></CustomerDetails>
        </section>
      </main>
    </div>
  );
}

export default CustInventoryContainer;
