import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: RouteComponent, userID, logoutUser, confirmRegistration, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) => (userID ? (
        <RouteComponent {...routeProps} userID={userID} logoutUser={logoutUser} confirmRegistration={confirmRegistration} />
      ) : (
        <Redirect to={"/auth"} />
      ))}
    />
  );
}
