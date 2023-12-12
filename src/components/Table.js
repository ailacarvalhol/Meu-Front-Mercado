import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AlertDialog from "./Dialog";

export default function TableComponent({ header, rows, view }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleClickOpen = (row) => {
    setOpen(true);
    setItems(row.Items);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "95vw" }}>
          <TableHead>
            <TableRow>
              {header.map(
                (item, index) =>
                  item !== "action" && (
                    <TableCell
                      key={index + 1}
                      align="center"
                      sx={{ background: "#B6D278" }}
                    >
                      {item}
                    </TableCell>
                  )
              )}
              {view && <TableCell align="center" sx={{ background: "#B6D278"}}> </TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length > 0 ? (
              rows?.map((row) => (
                <TableRow key={row.id}>
                  {!row.items &&
                    header.map((item, index) => (
                      <TableCell key={index + 1} align="center">
                        {index === 2 ? `R$ ${row[item]}` : row[item]}
                      </TableCell>
                    ))}
                  {row.view && row.Items && (
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        onClick={() => handleClickOpen(row)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#B6D278",
                            color: "#000", // Cor de fundo ao passar o mouse
                          },
                        }}
                      >
                        Visualizar
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={12}>
                  Lista vazia
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <AlertDialog open={open} handleClose={handleClose} items={items} />
    </>
  );
}
