import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function TableComponentCart() {
  const [rows, setRow] = useState([]);
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState(false);
  const header = ["Item", "Quantidade", "Total", ""];

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const horizontal = "center";
  const vertical = "top";

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  useEffect(() => {
    setItems(false);
    setRow(JSON.parse(localStorage.getItem("products")));
  }, [items]);

  useEffect(() => {
    let data = localStorage.getItem("products");
    if (data != null) {
      let cart = JSON.parse(data);
      let result = 0;
      for (let index = 0; index < cart.length; index++) {
        result += cart[index].Quantidade * cart[index].Valor;
      }
      setValue(parseFloat(result.toFixed(2)));
    }
  }, [items]);

  function decrementCard(e) {
    setItems(true);
    let data = localStorage.getItem("products");
    if (data != null) {
      let cart = JSON.parse(data);
      for (let index = 0; index < cart.length; index++) {
        if (e.id === cart[index].id) {
          cart[index].Quantidade = cart[index].Quantidade - 1;
          cart[index].Total = cart[index].Quantidade * cart[index].Valor;
          localStorage.setItem("products", JSON.stringify(cart));
        }
      }
    }
  }
  function incrementCard(e) {
    setItems(true);
    let data = localStorage.getItem("products");
    if (data != null) {
      let cart = JSON.parse(data);
      for (let index = 0; index < cart.length; index++) {
        if (e.id === cart[index].id) {
          cart[index].Quantidade = cart[index].Quantidade + 1;
          cart[index].Total = cart[index].Quantidade * cart[index].Valor;
          localStorage.setItem("products", JSON.stringify(cart));
        }
      }
    }
  }
  function removeItem(e) {
    setItems(true);
    let data = JSON.parse(localStorage.getItem("products"));
    const filtered = data?.filter((item) => item.id !== e.id);
    localStorage.setItem("products", JSON.stringify(filtered));
  }
  function saveCart() {
    let data = localStorage.getItem("products");
    let historic = localStorage.getItem("historic");
    if (data != null) {
      let cart = JSON.parse(data);
      let hist = JSON.parse(historic);

      let newHistoric = {
        id: Date.now(),
        Data: new Date().toLocaleDateString("en-IN"),
        Descrição: description,
        Total: value,
        Items: cart,
        view: true,
      };
      if (historic !== null) {
        let result = hist.concat([newHistoric]);
        localStorage.setItem("historic", JSON.stringify(result));
      } else {
        localStorage.setItem("historic", JSON.stringify([newHistoric]));
      }
      localStorage.removeItem("products");
      setValue(0);
      setDescription("");
      setItems(true);
      setSnackbarOpen(true);

      setTimeout(() => {
        setSnackbarOpen(false);
      }, 3000);
    }
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item m={2} lg={3}>
          <Typography>Descrição da Compra</Typography>
          <TextField
            size="small"
            fullWidth={true}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
      </Grid>
      <TableContainer>
        <Table
          sx={{
            minWidth: "90vw",
            "& td, & th": { border: 0 },
          }}
        >
          <TableHead>
            <TableRow>
              {header.map((item, index) => (
                <TableCell
                  key={index + 1}
                  align="right"
                  sx={{ background: "#B6D278" }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length > 0 ? (
              rows?.map((row, index) => (
                <TableRow key={index + 1}>
                  <TableCell align="right">{row.Nome}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => decrementCard(row)}
                      sx={{ m: 1 }}
                    >
                      -
                    </Button>
                    {row.Quantidade}
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => incrementCard(row)}
                      sx={{ m: 1 }}
                    >
                      +
                    </Button>
                  </TableCell>
                  <TableCell align="right">R$ {row.Total}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => removeItem(row)}
                    >
                      remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={12}>
                  CARRINHO VAZIO!!!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item m={2}>
          <Typography>Valor da compra</Typography>
          <TextField
            size="small"
            fullWidth={true}
            disabled
            value={`${"R$"} ${value}`}
          />
        </Grid>
        <Grid item m={1}>
          <Button
            variant="contained"
            onClick={() => saveCart()}
            disabled={!description || rows?.length === 0}
          >
            Finalizar compra
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Compra Realizada com Sucesso!!!"
        key={vertical + horizontal}
      />
    </>
  );
}
