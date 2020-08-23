import {
  GET_CUSTOMER_LIST,
  GET_CUSTOMER_DETAILS,
} from "../action/custInventory.action.type";

const initialState = {
  customers: [],
  customerDetails: {},
  selectedCustId: null,
};

const customerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CUSTOMER_LIST:
      return { ...state, customers: payload };
    case GET_CUSTOMER_DETAILS:
      return {
        ...state,
        customerDetails: state.customers.find((cust) => cust.id === payload),
        selectedCustId: payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
