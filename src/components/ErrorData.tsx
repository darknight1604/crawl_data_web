import { Typography } from "@mui/material";
import { ERROR_MESSAGE } from "../assets/constants";

const ErrorData = (props: { nameArea: string}) => {
    return (
        <div>
            <Typography variant="h3" gutterBottom component="div" sx={{ textAlign: 'left' }}> 
                {props.nameArea}
            </Typography>
            <span>{ERROR_MESSAGE}</span>
        </div>
    )
}

export default ErrorData;