import React from 'react';
import Router from '../Router'
import './App.css'
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

function App() {
  SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: "Gardenia Issue Management",
        apiDomain: 'http://localhost:4000',
        websiteDomain: 'http://localhost:3000',
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(),
        Session.init()
    ]
});
  return (
    <SuperTokensWrapper>
      <Router/>
    </SuperTokensWrapper>
  );
}

export default App;
