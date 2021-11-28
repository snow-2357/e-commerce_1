import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton ,Button} from '@material-ui/core'
import {AddShoppingCart} from "@material-ui/icons"
import useStyles from "./styles";

function Product({product,addToCart}) {
    const classes=useStyles();
    return (
        // <Card  sx={{ maxWidth: 345 }}>
        //     <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
        //     <CardContent>
        //         <div className={classes.cardContent}>
        //             <Typography variant="h5" gutterBottom >
        //                 {product.name}
        //             </Typography>
        //             <Typography variant="h5">
        //                 {product.price.formatted_with_symbol}
        //             </Typography>
        //         </div>
        //         <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="h6" color="textSecondary">
                        
        //             </Typography>
        //     </CardContent>
        //     <CardActions disableSpacing className={classes.cardActions}>
        //         <IconButton aria-label="Add to Cart" onClick={()=>addToCart(product.id,1)}>
        //             <AddShoppingCart />
        //         </IconButton>
        //     </CardActions>
            
        // </Card>
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="200"
                image={product.image.url} title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.price.formatted_with_symbol}
                </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="h6" color="textSecondary" />
            </CardContent>

            <CardActions>
                <IconButton aria-label="Add to Cart" onClick={()=>addToCart(product.id,1)}>
                   <AddShoppingCart />
                </IconButton>
            </CardActions>
      </Card>
    )
}

export default Product
