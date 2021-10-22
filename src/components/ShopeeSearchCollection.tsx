import { Grid, Typography } from "@mui/material";
import { useGetDataSearchViewQuery } from "../services/crawlData";
import  ProductCard  from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ShopeeSearchCollection = () => {
    const { data, error, isLoading } = useGetDataSearchViewQuery();

    var listItems;
    if(isLoading){
        listItems = Array.from(new Array(6)).map((emptyItem, index) => 
            <Grid item xs={2} key={index.toString()}>
                <ProductCardSkeleton />
            </Grid>
        );
    } else if(data !== undefined && data.length > 0){
        listItems = data.map((product) => 
            <Grid item xs={2} key={product.id.toString()}>
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
                            Search collection
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

export default ShopeeSearchCollection;