import React, {  } from "react";
import { Grid, Paper } from "@mui/material";
import Base from "../components/Base";
import TableComponentCart from "../components/TableCart";

function Cart() {

  return (
    <Base title="-> Carrinho de Compras">
      <Paper sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mt={2}>
          <Grid item lg={12}>
            <TableComponentCart />
          </Grid>
        </Grid>
      </Paper>
    </Base >
  );
}

export default Cart;
