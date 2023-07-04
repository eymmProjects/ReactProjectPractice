import { PropsWithChildren } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
const AuthProvider = (props: PromiseSettledResult<{}>) => {
  const history = useHistory();
  function onRedirectCallback(appState?: AppState | undefined, user?: User | undefined): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <Auth0Provider
        domain="dev-3mkue6xikr6uhe7m.us.auth0.com"
        clientId="U0YgG5KqqhdlfO23WCHoCYdX93yF68lb"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        onRedirectCallback={onRedirectCallback}
      >
        {props.children}
      </Auth0Provider>
    </div>
  );
};

export default AuthProvider;
