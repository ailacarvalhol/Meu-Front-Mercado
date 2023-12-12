import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function ImageCard({ item }) {

  function AddItemToCard(e) {
    if (localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify([e]));
    } else {
      localStorage.setItem(
        'products',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('products')),
          e
        ])
      );
    }
  }
  return (
    <Card sx={{ width: "400px", borderRadius: 5 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <CardMedia
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
          // component="img"
          // height="150"
          image={item.image}
          alt="Product Image"
        />
        <Typography   noWrap>
          {item.Nome}
        </Typography>
        <Typography sx={{ fontSize: 14 }}  color="#7FBA00">
          R$ {item.Valor}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "25%", borderRadius: 10, backgroundColor: "#7FBA00" }}
          onClick={() => AddItemToCard(item)}
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
