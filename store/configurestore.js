import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";

const configurestore = () => {
  const strore = createStore(reducer);
  return strore;
};

const wrapper = createWrapper(configurestore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
