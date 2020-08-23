import React, { useContext } from "react";
import { inventoryContext } from "../container/CustInventoryContainer";
import "./customer.css";

export const Customer = (props) => {
  const { customer } = props;
  const { onCustomerClick, selectedCustId } = useContext(inventoryContext);
  const callDetails = () => {
    onCustomerClick(customer.id);
  };
  const classlist = `customer ${
    selectedCustId === customer.id ? "selected" : ""
  }`;
  return (
    <li onClick={callDetails} className={classlist}>
      <span>{customer.id}</span>
      <span>{`${customer.first_name} ${customer.last_name}`}</span>
      <span>{customer.age} </span>
    </li>
  );
};
