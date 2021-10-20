import React from "react";
import {  Card, CardContent, Skeleton, Typography,  } from "@mui/material";
import { Box } from "@mui/system";
import { red } from '@mui/material/colors';

const ProductCardSkeleton = () => {
  const card = (
    <React.Fragment>
        <Skeleton variant="rectangular" width={210} height={118} />
        <CardContent>
            <Box
              fontSize="h5.fontSize"
              component="div" 
              overflow="inherit"            
              whiteSpace="pre-line"
              textOverflow="ellipsis" height={40}
              sx={{ textAlign: 'left', fontSize: 14 }}
            >
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
            <Typography gutterBottom component="div" sx={{color: red[500], mt: "2rem"}}> 
              <Skeleton />
            </Typography>
        </CardContent>
    </React.Fragment>
  );
    

  return (
      <Card variant="outlined" sx={{ maxHeight: 320 }}>
        {card}
      </Card>  
  )
}

export default ProductCardSkeleton;
