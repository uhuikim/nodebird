import React from "react";
import propTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configurestore";

import "antd/dist/antd.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
