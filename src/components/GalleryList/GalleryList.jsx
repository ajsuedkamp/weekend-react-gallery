import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({picture, likeImage}) {
    return <GalleryItem picture={picture} likeImage={likeImage}/>
}

export default GalleryList;