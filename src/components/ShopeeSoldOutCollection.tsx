import { Grid, Typography } from "@mui/material";
import { useGetDataSoldOutQuery } from "../services/crawlData";
import  ProductCard  from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ShopeeSoldOutCollection = () => {
    const { data, error, isLoading } = useGetDataSoldOutQuery();

    var listItems;
    if(isLoading){
        listItems = Array.from(new Array(6)).map(() => 
            <Grid item xs={2}>
                <ProductCardSkeleton />
            </Grid>
        );
    } else if(data !== undefined && data.length > 0){
        listItems = data.map((product) => 
            <Grid item xs={2}>
                <ProductCard product={product}/>
            </Grid>
        );
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={2} md={2}>
                    <div></div>
                </Grid>
                <Grid item xs={8} md={8} sm={12}> 
                    <div>
                        <Typography variant="h3" gutterBottom component="div" sx={{ textAlign: 'left' }}> 
                            Soldout collection
                        </Typography>
                        <Grid container spacing={2}>
                            {listItems}
                        </Grid>
                    </div> 
                </Grid>
                <Grid item xs={2} md={2}>
                    <div></div>
                </Grid>
            </Grid>
        </div>
           
    )
}

export default ShopeeSoldOutCollection;