import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);
  

  useEffect(() => {
    console.log('useEffect page-load');
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryItems(response.data);
      console.log(response.data); //Testing GET
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!')
    });
  }
      return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <Container maxWidth="sm">
              <p>Gallery goes here</p>
              <Grid container spacing={2}>
                {
                  galleryItems.map(picture => {
                    return <GalleryList
                            key={picture.id} 
                            picture={picture}
                            />
                  })
                }
              </Grid>
            </Container>
          </div>
        );
}


export default App;
