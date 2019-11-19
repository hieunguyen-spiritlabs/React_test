import React, { Fragment } from "react";

import Header from "./Header.component";

const WithHeader = WrappedComponent => (
  <Fragment>
    <Header />
    <WrappedComponent />
  </Fragment>
);

export default WithHeader;
