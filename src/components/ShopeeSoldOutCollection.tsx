import { Grid, Typography } from "@mui/material";
import { useGetDataSoldOutQuery } from "../services/crawlData";
import  ProductCard  from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useState } from "react";

const ShopeeSoldOutCollection = () => {
    const { data, error, isLoading } = useGetDataSoldOutQuery();

    var listItems;
    if(isLoading){
        listItems = Array.from(new Array(6)).map((emptyItem, index) => 
            <Grid item xs={2} key={index.toString()}>
                <ProductCardSkeleton />
            </Grid>
        );
    } else if(data !== undefined && data.length > 0){
        var successCrawlData = data.filter(item => item.image_product !== "");
        listItems = successCrawlData.map((product) => 
            <Grid item xs={2} key={product.id.toString()}>
                <ProductCard product={product}/>
            </Grid>
        );
    }else if (error){
        return (
            <div></div>
        )
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