import { Grid, Typography } from "@mui/material";
import { Product } from "../types/product";
import  ProductCard  from "./ProductCard";

const ShopeeCollection = (props: { products: Array<Product>}) => {
    var listItems;
    if(props.products.length > 0){
        listItems = props.products.map((product) => 
            <Grid item xs={2}>
                <ProductCard product={product}/>
            </Grid>
        );
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={2} md={2} >
                    <div></div>
                </Grid>
                <Grid item xs={8} md={8} sm={12}>
                    <div>
                        <Typography variant="h3" gutterBottom component="div" sx={{ textAlign: 'left' }}> 
                            Top search
                        </Typography>
                        <Grid container spacing={2}>
                            {listItems}
                        </Grid>
                    </div> 
                </Grid>
                <Grid item xs={2} md={2} >
                    <div></div>
                </Grid>
            </Grid>
        </div>
           
    )
}

export default ShopeeCollection;