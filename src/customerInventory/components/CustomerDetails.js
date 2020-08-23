import React from "react";
import "./customerDetails.css";

export const CustomerDetails = (props) => {
  const { addresses } = props.details;
  return (
    <div className="detailsContainer">
      {addresses ? (
        <section>
          {addresses.map((address, i) => (
            <>
              <h3>Address {i + 1}</h3>
              <address className="address">
                <p>{address.streetName}</p>
                <p>{address.city}</p>
                <p>{address.state}</p>
                <p>{address.country}</p>
                <p>{address.zipCode}</p>
              </address>
            </>
          ))}
        </section>
      ) : (
        <article className="info">
          Select Customer from left to see customer Addresses.
        </article>
      )}
    </div>
  );
};
