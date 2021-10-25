import { Grid, ThemeProvider, Typography } from "@mui/material";
import { Product } from "../types/product";
import  ProductCard  from "./ProductCard";
import ErrorData from "./ErrorData";

const ShopeeCollection = (props: { products: Array<Product>, titleTheme: any}) => {
    const nameArea = "Top search"
    var listItems;
    if(props.products && props.products !== undefined &&  props.products.length > 0){
        listItems = props.products.map((product) => 
            <Grid item xs={6} sm={3} md={2} lg={2} key={product.id.toString()}>
                <ProductCard product={product} />
            </Grid>
        );
        return (
            <div>
                <ThemeProvider theme={props.titleTheme}>
                    <Typography variant="h3" gutterBottom component="div" sx={{ textAlign: 'left' }}> 
                        {nameArea}
                    </Typography>
                </ThemeProvider>
                <Grid container spacing={2}>
                    {listItems}
                </Grid>
            </div>
        )
    }else {
        return <ErrorData nameArea={nameArea}/>
    }
}

export default ShopeeCollection;