import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
export default function MultiActionAreaCard() {
    const [count,setCount] = useState(0);
  return (
    
    <Card  sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
        style={{ height: "250px", paddingTop: "2%" }}
          component="img"
          height="300"
          image={"/laal.jpg"}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Laal
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Hi Mom. I heard you are not feeling good today?
            I just came to smell you.
            Please pet me ?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => setCount((count) => count + 1)} size="small" color="primary">
          Paws
        </Button>
        <Button >My Smiles {count}</Button>
      </CardActions>
      
    </Card>
  );
}