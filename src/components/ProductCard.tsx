import React from "react";
import {  Card, CardContent, CardMedia, Typography,  } from "@mui/material";
import { Product } from "../types/product";
import { red } from '@mui/material/colors';

const ProductCard = (props: { product: Product}) => {
  const image_url = props.product.image_product;
  const price = '' + props.product.price_group.price_from.price + props.product.price_group.price_from.unit
  let priceTo = ''
  if(props.product.price_group.price_to){
    priceTo = ' - ' + props.product.price_group.price_to.price + props.product.price_group.price_to.unit
  }
  const productName = props.product.product_name
  const card = (
    <React.Fragment>
        <CardMedia
          component="img"
          // height="140"
          image={image_url}
          alt="image"
          title={productName}
        />
        <CardContent>
            <Typography gutterBottom component="div" sx={{fontSize: 13}} noWrap={true} title={productName}> 
              {productName}
            </Typography>
            <Typography gutterBottom component="div" sx={{color: red[500], mt: "2rem", fontSize: 14}}> 
              {price} {priceTo}
            </Typography>
        </CardContent>
    </React.Fragment>
  );
    

  return (
      <Card variant="outlined" sx={{ maxHeight: 320, maxWidth: 220 }}>
        {card}
      </Card>  
  )
}

export default ProductCard;
