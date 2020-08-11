import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="fname" />
      <TextField source="lname" />
      <TextField source="email" />
      <TextField source="role" />
    </Datagrid>
  </List>
);
