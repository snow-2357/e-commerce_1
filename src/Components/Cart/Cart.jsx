import { Container, Grid, Typography ,Button} from '@material-ui/core'
import useStyles from "./styles"
import React from 'react'
import Cartitem from "./Cartitem/Cartitem"
export default function Cart({cart}) {
    const classes=useStyles();
 
    const EmptyCart=()=>(
        <Typography variant="h6">No Item to be Found</Typography>
    );
    const FilledCart=()=>(
        <div>
            <Grid container spacing={2}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <Cartitem item={item}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant= "h4">
                    Totle :{cart.subtotal.formatted_with_symbol}
                    <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
                    <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
                </Typography>
            </div>
        </div>
    )

    if(!cart.line_items) return "Lodding---"
    
    return (
        <div>
            <Container>
                <div className={classes.toolbar}></div>
                <Typography gutterBottom className={classes.title} variant="h6">Your Shoping Cart</Typography> 
                {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
            </Container>
        </div>
    )
}
