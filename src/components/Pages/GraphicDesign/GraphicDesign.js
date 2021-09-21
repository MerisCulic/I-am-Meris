import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import "./GraphicDesign.css";

import GD1 from "./Images/GD (1).jpg";
import GD2 from "./Images/GD (2).jpg";
import GD3 from "./Images/GD (3).jpg";
import GD4 from "./Images/GD (4).jpg";
import GD5 from "./Images/GD (5).jpg";
import GD6 from "./Images/GD (6).jpg";
import GD7 from "./Images/GD (7).jpg";
import GD8 from "./Images/GD (8).jpg";
import GD9 from "./Images/GD (9).jpg";
import GD10 from "./Images/GD (10).jpg";
import GD11 from "./Images/GD (11).jpg";
import GD12 from "./Images/GD (12).jpg";
import GD13 from "./Images/GD (13).jpg";
import GD14 from "./Images/GD (14).jpg";
import GD15 from "./Images/GD (15).jpg";
import GD16 from "./Images/GD (16).jpg";
import GD17 from "./Images/GD (17).jpg";


const images = [
    {
        original: GD1,
        thumbnail: GD1,
    },
    {
        original: GD2,
        thumbnail: GD2,
    },
    {
        original: GD3,
        thumbnail: GD3,
    },
    {
        original: GD4,
        thumbnail: GD4,
    },
    {
        original: GD5,
        thumbnail: GD5,
    },
    {
        original: GD6,
        thumbnail: GD6,
    },
    {
        original: GD7,
        thumbnail: GD7,
    },
    {
        original: GD8,
        thumbnail: GD8,
    },
    {
        original: GD9,
        thumbnail: GD9,
    },
    {
        original: GD10,
        thumbnail: GD10,
    },
    {
        original: GD11,
        thumbnail: GD11,
    },
    {
        original: GD12,
        thumbnail: GD12,
    },
    {
        original: GD13,
        thumbnail: GD13,
    },
    {
        original: GD14,
        thumbnail: GD14,
    },
    {
        original: GD15,
        thumbnail: GD15,
    },
    {
        original: GD16,
        thumbnail: GD16,
    },
    {
        original: GD17,
        thumbnail: GD17,
    }
  ];
  
class GraphicDesign extends Component {
    render() {
        return (
            <>
            <div className="bg-light-green pa2 mb5 br4 fl w-100 shadow-3">
                <h1 className="dib pa2 v-top">Graphic design</h1>
                <div className="bg-washed-green pa2 br4 fl w-100">
                    <ImageGallery items={images} />
                </div>
            </div>    
            </>
        )
    }
}


export default GraphicDesign;