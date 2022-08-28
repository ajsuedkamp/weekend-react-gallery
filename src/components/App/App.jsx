import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [galleryItems, setGalleryItems] = useState('')

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
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
