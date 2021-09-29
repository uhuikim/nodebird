import { createWrapper } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configurestore = () => {
  // 추후 리덕스 사가 사용할때 필요한 설정
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const strore = createStore(reducer, enhancer);
  return strore;
};

const wrapper = createWrapper(configurestore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
