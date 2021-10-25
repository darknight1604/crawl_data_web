import { Grid, ThemeProvider, Typography } from "@mui/material";
import { useGetDataSoldOutQuery } from "../services/crawlData";
import ErrorData from "./ErrorData";
import  ProductCard  from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ShopeeSoldOutCollection = (props: { titleTheme: any}) => {
    const { data, error, isLoading } = useGetDataSoldOutQuery();
    const nameArea = "Soldout collection"
    var listItems;
    if(isLoading){
        listItems = Array.from(new Array(6)).map((emptyItem, index) => 
            <Grid item xs={12} sm={3} md={2} lg={2} key={index.toString()}>
                <ProductCardSkeleton />
            </Grid>
        );
    } else if(data && data !== undefined){
        if(data.length > 0){
            var successCrawlData = data.filter(item => item.image_product !== "");
            listItems = successCrawlData.map((product) => 
                <Grid item xs={12} sm={3} md={2} lg={2} key={product.id.toString()}>
                    <ProductCard product={product}/>
                </Grid>
            );
        }else{
            return <ErrorData nameArea={nameArea}/>
        }
    }else if (error){
        return <ErrorData nameArea={nameArea}/>
    }
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
}

export default ShopeeSoldOutCollection;