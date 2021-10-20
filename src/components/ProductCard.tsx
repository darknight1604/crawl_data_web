import React from "react";
import {  Card, CardContent, CardMedia, Typography,  } from "@mui/material";
import { Box } from "@mui/system";
import { Product } from "../types/product";
import { red } from '@mui/material/colors';

const ProductCard = (props: { product: Product}) => {
  const image_url = props.product.image_product;
  const price = '' + props.product.price_group.price_from.price + props.product.price_group.price_from.unit
  let priceTo = ''
  if(props.product.price_group.price_to){
    priceTo = ' - ' + props.product.price_group.price_to.price + props.product.price_group.price_to.unit
  }
  const card = (
    <React.Fragment>
        <CardMedia
          component="img"
          // height="140"
          image={image_url}
          alt="image"
        />
        <CardContent>
            <Box
              fontSize="h5.fontSize"
              component="div" 
              overflow="inherit"            
              whiteSpace="pre-line"
              textOverflow="ellipsis" height={30}
              sx={{ textAlign: 'left', fontSize: 13,}}
            >
              {props.product.product_name}
            </Box>
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
