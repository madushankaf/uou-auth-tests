import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";
import { render } from "react-dom";

const Index = () => (
  <AuthProvider
      config={ {
          signInRedirectURL: "https://945ccb54-ad27-4f50-ba98-b5f974321711.nonprod.uou.choreoapps.dev/",
          signOutRedirectURL: "https://945ccb54-ad27-4f50-ba98-b5f974321711.nonprod.uou.choreoapps.dev",
          clientID: "ylZVPrUxgPCPrgiLAoCWGkOhhDqTdnU7Wx2T",
          baseUrl: "https://go.utah.edu/cas/oidc",
          scope: [ "openid","profile","email", "urn:vtxdemo:booksapibooksrestendpoint:add_book", "urn:vtxdemo:booksapibooksrestendpoint:delete_book", "urn:vtxdemo:booksapibooksrestendpoint:get_book", "urn:vtxdemo:booksapibooksrestendpoint:modify_book" ]
      } }
  >
        <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>
);

render((<Index />), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
