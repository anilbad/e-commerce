import React from "react";
import "./App.css";

import { fetchUtils, Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";
import { UserList } from "./pages/users/UserList";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(
  "http://localhost:4000/v1/admin",
  httpClient
);

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
