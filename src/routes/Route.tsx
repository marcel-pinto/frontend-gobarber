import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
// rotaPrivada/usuarioAutenticado
// true/true  : OK
// true/false : Redirecionar o usuario para o login
// false/true : Redirecionar o usuario para o dashboard
// false/false: OK

const Route: React.FC<RouteProps> = (
  { isPrivate = false, component: Component, ...attributes },
) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...attributes}
      render={({ location }) => (isPrivate === !!user
        ? (<Component />)
        : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        ))}
    />
  );
};

export default Route;
