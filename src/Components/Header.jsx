import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export const Header = () => {
  return (

    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" >
          Booking Form
        </Typography>
      </Toolbar>
    </AppBar>
  )
};
