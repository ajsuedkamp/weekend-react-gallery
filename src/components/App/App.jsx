import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryItems from '../GalleryItems/GalleryItems.jsx';

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
        <p>Gallery goes here</p>
        <ul>
          {
            galleryItems.map(item => {
              return <GalleryItems
                      key={item.id} 
                      item={item}
                      />
            })
          }
        </ul>
      </div>
    );
}


export default App;
