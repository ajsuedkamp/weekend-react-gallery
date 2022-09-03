
function GalleryItems({item}) {
    return <li>
    <img src={item.path}></img>
    {item.description}
    {item.likes}
  </li>
}

export default GalleryItems;