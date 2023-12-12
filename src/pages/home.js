import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicCard from "../components/Card";
import { Grid } from "@mui/material";
import Base from "../components/Base";
import { fruits } from "../constants/fruits";
import { vegetables } from "../constants/vegetables";
import { legumes } from "../constants/legumes";
import Banner from "../components/Banner";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">{children}</Typography>
        </Box>
      )}
    </Box>
  );
}
export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Banner />
      <Base title={"-> Mercado"}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Frutas" />
            <Tab label="Verduras" />
            <Tab label="Legumes" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={1}>
            {fruits.map((item) => {
              return (
                <Grid key={item.id} item lg={4} md={6} sm={12} xs={8} mb={2}>
                  <BasicCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container spacing={1}>
            {vegetables.map((item) => {
              return (
                <Grid key={item.id} item lg={4} md={6} sm={12} xs={8} mb={2}>
                  <BasicCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid container spacing={1}>
            {legumes.map((item) => {
              return (
                <Grid key={item.id} item lg={4} md={6} sm={12} xs={8} mb={2}>
                  <BasicCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </CustomTabPanel>
      </Base>
    </React.Fragment>
  );
}
