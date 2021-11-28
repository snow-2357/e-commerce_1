import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

//   const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

//   const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    // <Card sx={{ maxWidth: 45 }}>
    //   <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
    //   <CardContent className={classes.cardContent}>
    //     <Typography variant="h4">{item.name}</Typography>
    //     <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <div className={classes.buttons}>
    //       <Button type="button" size="small" >-</Button>
    //       <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
    //       <Button type="button" size="small">+</Button>
    //     </div>
    //     <Button variant="contained" type="button" color="secondary" ></Button>
    //   </CardActions>
    // </Card>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image.url}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.name}
          </Typography>
        </CardContent>

        <CardActions>
            <div className={classes.buttons}>
          <Button type="button" size="small" >-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small">+</Button>
            </div> 
          
          <Button variant="contained" type="button" color="secondary"  size="small">Remove</Button>
        </CardActions>
      </Card>
  );
};

export default CartItem;