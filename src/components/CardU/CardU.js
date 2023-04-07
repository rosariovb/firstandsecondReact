import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const CardU = ({
  img,
  title,
  description,
  price,
  backgroundColor,
  children,
}) => {
  return (
    <Card sx={{ maxWidth: 345, background: backgroundColor }}>
    <CardActionArea>
      <CardMedia  image={img} sx={{ height: 140 }} />
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
        <div>{children}</div>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};
export default CardU;