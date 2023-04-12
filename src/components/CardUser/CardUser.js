import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom";



const CardUser = ({
  img,
  id,
  title,
  description,
  price,
  backgroundColor,
  children,
}) => {
  return (
    <Card  sx={{ maxWidth: 300, background: backgroundColor }}>
    <CardActionArea> 
      <CardMedia  image={img} sx={{ height: 180 }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Link to= {`/detail/${id}`}>
        Ver detalle 
        </Link>

        <div>{children}</div>
      </CardContent>
    </CardActionArea>
  </Card>

  );
};
export default CardUser;