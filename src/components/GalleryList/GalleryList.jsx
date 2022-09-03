import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function GalleryList({picture}) {
    return <Grid item xs={6} key={picture.id}>
              <Card elevation={3}>
                <CardContent>
                <img src={picture.path}></img>
                  <Typography variant="h5">
                    {picture.description}
                  </Typography>
                  <Button variant="contained" size="small">LIKE</Button>
                </CardContent>
              </Card>
              <Typography variant="body2">
                  Number of Likes: {picture.likes}
                  </Typography>
            </Grid>
}

export default GalleryList;