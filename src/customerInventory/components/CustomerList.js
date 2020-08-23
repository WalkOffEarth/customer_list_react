import React from "react";
import { Customer } from "./Customer";
import "./customerList.css";

export const CustomerList = (props) => {
  const { customers } = props;
  return (
    <>
      <header className="listHeader">
        <span>ID</span>
        <span>NAME</span>
        <span>AGE </span>
      </header>
      <ul className="listContainer">
        {customers && customers.length
          ? customers.map((c) => <Customer key={c.id} customer={c}></Customer>)
          : null}
      </ul>
    </>
  );
};
