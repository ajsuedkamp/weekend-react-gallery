import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react'

function GalleryItem({picture}) {  
    const [toggle, setToggle] = useState(false);    
    return <Grid item xs={6} key={picture.id}>
             <Card elevation={3}>
                <CardContent>
                {toggle ? (
                // When toggle is true, this is diplayed
                <img src={picture.path}></img>
                ) : (
                // When toggle is false, this is displayed
                <Typography variant="h5">
                    {picture.description}
                </Typography>
                )}
                <Button variant="outlined" onClick={() => setToggle(!toggle)}>
                {toggle ? 'View Description' : 'View Image'}  
                </Button>
                        
                <Button variant="contained" size="small">LIKE</Button>
                </CardContent>
             </Card>
             <Typography variant="body2">
                    Number of Likes: {picture.likes}
             </Typography>
            </Grid>
}


export default GalleryItem;