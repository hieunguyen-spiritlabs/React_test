import React, { Fragment } from "react";

import Header from "./Header.component";

const WithHeader = (WrappedComponent, HeaderChosen = Header ) => (
  <Fragment>
    <HeaderChosen />
    <WrappedComponent />
  </Fragment>
);

export default WithHeader;
