import {
  GET_CUSTOMER_LIST,
  GET_CUSTOMER_DETAILS,
} from "./custInventory.action.type";

export const getCustomers = () => async (dispatch) => {
  const resp = await fetch("http://localhost:3009/customers");
  const json = await resp.json();
  console.log(json);
  dispatch({ type: GET_CUSTOMER_LIST, payload: json });
};

export const getCustomerDetails = (id) => (dispatch) => {
  dispatch({ type: GET_CUSTOMER_DETAILS, payload: id });
};
