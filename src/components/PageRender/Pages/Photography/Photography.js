import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import "./Photography.css";

const images = [
    {
        original: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-vnr-electric-on-the-road-daytime-shot-passenger-side?wid=1024",
        thumbnail: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-vnr-electric-on-the-road-daytime-shot-passenger-side?wid=1024",
    }
]

class Photography extends Component {
    render() {
        return (
            <>
            <div className="Photography">
                <div className="gallery bg-light-green pa2 br4 fl w-100 bw1 ba shadow-3">
                    <h1 className="dib pa2 v-top">Photography</h1>
                    <div className="applist bg-washed-green pa2 br4 fl w-100">
                        <ImageGallery items={images}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Photography;