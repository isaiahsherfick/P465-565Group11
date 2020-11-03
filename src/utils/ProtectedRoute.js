import React from "react";
import { Route, Redirect } from "react-router-dom";
//import auth from "./auth";
import { getUserId } from '../helpers/common';

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        //if (auth.isAuthenticated()) {
        if (getUserId()!== null) {
            console.log(getUserId())
          return <Component {...props} />;
        } else {
            console.log('inside route',getUserId())
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};


// import React from 'react';
// import { Redirect, Route } from "react-router-dom";
// //import { ACCESS_TOKEN_NAME } from '../constants/apiContants';
// import { getUserId } from '../helpers/common';

// function ProtectedRoute({ children, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//         getUserId() ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }

// export default ProtectedRoute;
