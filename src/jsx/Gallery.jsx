// src/pages/Gallery.jsx
import React from 'react';
import '../css/Page.css'
import '../css/Paintings.css'
import LU from "../../assets/imgs/LU.png"
import F from "../../assets/imgs/F.png"
import BS from "../../assets/imgs/BS.png"
import R1 from "../../assets/imgs/R1.jpeg"


const Painting = ({ image, title, rows, cols }) => {
    const gridStyle = {
        gridColumn: cols ? `span ${cols}` : 'auto',
        gridRow: rows ? `span ${rows}` : 'auto'
    };
    
    return (
      <div className="Painting" style={gridStyle}>
        <img src={image} alt={title}></img>
      </div>
    )
};

const Gallery = () => {
  const paintings = [
    {
      id: 1,
      title: "Looking Up",
      image: LU,
      rows: 80,
      cols: 10
    },
    {
      id: 2,
      title: "F",
      image: F,
      rows: 90,
      cols: 10
    },
    {
      id: 3,
      title: "Bottle Service",
      image: BS,
      rows: 20,
      cols: 15
    },
    {
      id: 4,
      title: "Route 1",
      image: R1,
      rows: 5,
      cols: 35
    }
  ]
  return (
    <>
    <div className="Header">
        Gallery
    </div>
    <div className="Page-Content-inner">
        <div className="Image-board">
            {paintings.map(painting => (
              <Painting
                key={painting.id}
                title={painting.title}
                image={painting.image}
                rows={painting.rows}
                cols={painting.cols}
              />
            ))}
        </div>
    </div>
    </>
  );
};

export default Gallery;