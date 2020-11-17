import * as actionTypes from "../actions/actions";
import { updatedObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const fetchOrdersSuccess = (state, action) => {
  const updatedState = {
    orders: action.orders,
    loading: false,
  };
  return updatedObject(state, updatedState);
};

const fetchOrdersFail = (state, action) => {
  const updatedState = {
    error: action.error,
    loading: false,
  };
  return updatedObject(state, updatedState);
};
const fetchOrdersStart = (state) => {
  const updatedState = {
    loading: true,
  };
  return updatedObject(state, updatedState);
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId,
  };
  const updatedState = {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true,
  };
  return updatedObject(state, updatedState);
};

const purchaseBurgerFail = (state) => {
  const updatedState = { loading: false };
  return updatedObject(state, updatedState);
};

const purchaseBurgerStart = (state) => {
  const updatedState = { loading: true };
  return updatedObject(state, updatedState);
};

const purchaseInit = (state) => {
  const updatedState = { purchased: false };
  return updatedObject(state, updatedState);
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(action, state);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state);
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state);
    default:
      return state;
  }
};

export default reducer;
