import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core'
import {AddShoppingCart} from "@material-ui/icons"
function Product({product}) {
    return (
        <Card >
            <CardMedia image="" title={product.name}/>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
            </CardContent>
            
        </Card>
    )
}

export default Product
