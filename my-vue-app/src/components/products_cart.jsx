import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";


function Product_Card(props) {

  const { img_url, title, dis_price, orignal_price,heading } =
    props.card_data;
  return (
    <>
    
    <Card sx={{ maxWidth: "200px" ,height:"420px"}}>
      <CardMedia sx={{ height: "250px",objectFit:"contain" }} image={img_url} title="green iguana" />
      <CardContent>
        <Typography sx={{fontSize:"15px"}} gutterBottom variant="p" component="div">
          {title}
        </Typography>

    

        <Stack flexDirection="row" gap={3} alignItems="center">
          <Typography> {dis_price}</Typography>

          <Typography sx={{ textDecorationLine: "line-through" }}>
             {orignal_price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
    </>
  );
}

export { Product_Card};

