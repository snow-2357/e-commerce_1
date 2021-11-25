import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product';
export default function Products() {
    const products=[
        {id:1,name:"Shoes", description:"Nike Shoes" },
        {id:2,name:"Clock", description:"Wall Clock" },
        {id:3,name:"KeyBoard", description:"Mac-keys" },

    ];
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    products.map(product=>{
                        return (
                            <Grid item key={product.id} xs={12} md={6} sm={4} lg={3}>
                                <Product product={product}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </main>
    )
}
