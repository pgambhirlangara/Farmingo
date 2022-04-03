import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CustomerProductItem(props) {

  const [orderQuantity, setOrderQuantity] = useState(0);


  const increment = () => {
    setOrderQuantity(orderQuantity + 1);
    props.addItems(orderQuantity, props.data);
  }

  const decrement = () => {
    if (orderQuantity > 0) {
        setOrderQuantity(orderQuantity - 1);
        props.addItems(orderQuantity, props.data);
    }
  }

  return (
    <Card sx={{ height: "350px" }}>
      <CardMedia
        component="img"
        alt={props.data.title}
        height="140"
        image={props.data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {
              props.data.description
          }
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <span>PRICE: </span> : ${props.data.price}/lb
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" onClick={increment}><AddIcon /></Button>
        <span>{orderQuantity}</span>
        <Button size="small" onClick={decrement}><RemoveIcon /></Button>
      </CardActions>
    </Card>
  );
}