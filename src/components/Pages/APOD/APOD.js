/* Astronomy Photo Of the Day  */

import React, { useState, useEffect } from "react";
import "./APOD.css";
import NASAicon from "./NASA-icon.png";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

const APOD = ({toggleFullscreen}) => {
    const [photoData, setPhotoData] = useState(null);
  
    useEffect(() => {
      fetchPhoto();
  
      async function fetchPhoto() {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        const data = await res.json();
        setPhotoData(data);
      }
    }, []);
  
    if (!photoData) return <div />;
  
    return (
        <>
        <div className="center">
            <div className="gallery bg-light-green pa2 br4 fl w-100 shadow-3">
                <h1 className="f3 f2-m f1-l pa2">Astronomy Picture Of The Day</h1>
                <div className="bg-washed-green pa2 br4">
                    <h2 className="f5 f4-m f3-l fl w-100">{photoData.title}</h2>
                    <p className="date">{photoData.date}</p>
                    <div className="nasa-photo">
                        {photoData.media_type === "image" ? (
                            <img
                                id="apod-photo"
                                src={photoData.url}
                                alt={photoData.title}
                                className="photo pointer br4"
                                onClick={() => toggleFullscreen("apod-photo")}
                            />
                        ) : (
                            <iframe
                                id="apod-video"
                                title="space-video"
                                src={photoData.url}
                                frameBorder="0"
                                gesture="media"
                                allow="encrypted-media"
                                allowFullScreen
                                className="photo pointer"
                                onClick={() => toggleFullscreen("apod-video")}
                            />
                        )}
                        <p className="explanation pa3">{photoData.explanation}</p>
                    </div>
                    
                </div>
                <p className="tc">
                    <i>Provided by NASA</i>
                    <img id="NASAIcon" src={NASAicon} className="pl2" alt="" width="auto" height="30px"/>
                </p>
            </div>
        </div>
        </>
    );
}

export default APOD;