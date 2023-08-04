import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Divider } from "@mui/material";

const Header: React.FC = () => {
  return (
    <>
      <Box>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h4">Resources in Chicago</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar></Toolbar>
      {/* <Box height="10rem" padding={"2rem"}>
        <Typography variant="body1" gutterBottom>
          There are many resources around Chicago for those in need. Here are
          the ones that I've gathered so far.
        </Typography>
        <Typography variant="body1">
          Please check the results. Some organizations have multiple locations
          or no public location, so they will not show up on the map. Due to
          COVID, call ahead or check their website for more accurate
          information.`
        </Typography>
        // <Typography variant="body2">
        //   Documentation <a href="./Documentation.pdf">here</a>. This site is NOT
        //   mobile-friendly!
        // </Typography> 
      </Box>
      <Divider></Divider> */}
    </>
  );
};

export default Header;
