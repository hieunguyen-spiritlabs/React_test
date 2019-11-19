import React from "react";
import Spinner from "../loading-spinner/Spinner.component";

const WithSpinner = WrappedComponent => ({available, ...otherProps}) =>
  (available ? <WrappedComponent {...otherProps} /> : <Spinner />);

export default WithSpinner;
