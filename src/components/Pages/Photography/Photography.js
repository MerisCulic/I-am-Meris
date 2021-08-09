import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./Photography.css";

import weddings1 from "./Images/Weddings/Weddings(1).jpg";
import weddings2 from "./Images/Weddings/Weddings(2).jpg";
import weddings3 from "./Images/Weddings/Weddings(3).jpg";
import weddings4 from "./Images/Weddings/Weddings(4).jpg";
import weddings5 from "./Images/Weddings/Weddings(5).jpg";
import weddings6 from "./Images/Weddings/Weddings(6).jpg";
import weddings7 from "./Images/Weddings/Weddings(7).jpg";
import weddings8 from "./Images/Weddings/Weddings(8).jpg";
import weddings9 from "./Images/Weddings/Weddings(9).jpg";
import weddings10 from "./Images/Weddings/Weddings(10).jpg";
import weddings11 from "./Images/Weddings/Weddings(11).jpg";
import weddings12 from "./Images/Weddings/Weddings(12).jpg";
import weddings13 from "./Images/Weddings/Weddings(13).jpg";
import weddings14 from "./Images/Weddings/Weddings(14).jpg";
import weddings15 from "./Images/Weddings/Weddings(15).jpg";
import weddings16 from "./Images/Weddings/Weddings(16).jpg";
import weddings17 from "./Images/Weddings/Weddings(17).jpg";
import weddings18 from "./Images/Weddings/Weddings(18).jpg";
import weddings19 from "./Images/Weddings/Weddings(19).jpg";
import weddings20 from "./Images/Weddings/Weddings(20).jpg";
import weddings21 from "./Images/Weddings/Weddings(21).jpg";
import weddings22 from "./Images/Weddings/Weddings(22).jpg";
import weddings23 from "./Images/Weddings/Weddings(23).jpg";
import weddings24 from "./Images/Weddings/Weddings(24).jpg";
import weddings25 from "./Images/Weddings/Weddings(25).jpg";
import weddings26 from "./Images/Weddings/Weddings(26).jpg";

import products1 from "./Images/Products/Products(1).jpg";
import products2 from "./Images/Products/Products(2).jpg";
import products3 from "./Images/Products/Products(3).jpg";
import products4 from "./Images/Products/Products(4).jpg";
import products5 from "./Images/Products/Products(5).jpg";
import products6 from "./Images/Products/Products(6).jpg";
import products7 from "./Images/Products/Products(7).jpg";
import products8 from "./Images/Products/Products(8).jpg";
import products9 from "./Images/Products/Products(9).jpg";
import products10 from "./Images/Products/Products(10).jpg";
import products11 from "./Images/Products/Products(11).jpg";
import products12 from "./Images/Products/Products(12).jpg";

import meetings1 from "./Images/Meetings/Meetings(1).jpg";
import meetings2 from "./Images/Meetings/Meetings(2).jpg";
import meetings3 from "./Images/Meetings/Meetings(3).jpg";
import meetings4 from "./Images/Meetings/Meetings(4).jpg";
import meetings5 from "./Images/Meetings/Meetings(5).jpg";
import meetings6 from "./Images/Meetings/Meetings(6).jpg";
import meetings7 from "./Images/Meetings/Meetings(7).jpg";
import meetings8 from "./Images/Meetings/Meetings(8).jpg";
import meetings9 from "./Images/Meetings/Meetings(9).jpg";
import meetings10 from "./Images/Meetings/Meetings(10).jpg";
import meetings11 from "./Images/Meetings/Meetings(11).jpg";
import meetings12 from "./Images/Meetings/Meetings(12).jpg";
import meetings13 from "./Images/Meetings/Meetings(13).jpg";
import meetings14 from "./Images/Meetings/Meetings(14).jpg";
import meetings15 from "./Images/Meetings/Meetings(15).jpg";
import meetings16 from "./Images/Meetings/Meetings(16).jpg";
import meetings17 from "./Images/Meetings/Meetings(17).jpg";
 

const Photography =({gallery, onGalleryChange}) => {

    let images;
    if(gallery === "weddings"){
        images = [
            {
                original: weddings1,
                thumbnail: weddings1,
            },
            {
                original: weddings2,
                thumbnail: weddings2,
            },
            {
                original: weddings3,
                thumbnail: weddings3,
            },
            {
                original: weddings4,
                thumbnail: weddings4,
            },
            {
                original: weddings5,
                thumbnail: weddings5,
            },
            {
                original: weddings6,
                thumbnail: weddings6,
            },
            {
                original: weddings7,
                thumbnail: weddings7,
            },
            {
                original: weddings8,
                thumbnail: weddings8,
            },
            {
                original: weddings9,
                thumbnail: weddings9,
            },
            {
                original: weddings10,
                thumbnail: weddings10,
            },
            {
                original: weddings11,
                thumbnail: weddings11,
            },
            {
                original: weddings12,
                thumbnail: weddings12,
            },
            {
                original: weddings13,
                thumbnail: weddings13,
            },
            {
                original: weddings14,
                thumbnail: weddings14,
            },
            {
                original: weddings15,
                thumbnail: weddings15,
            },
            {
                original: weddings16,
                thumbnail: weddings16,
            },
            {
                original: weddings17,
                thumbnail: weddings17,
            },
            {
                original: weddings18,
                thumbnail: weddings18,
            },
            {
                original: weddings19,
                thumbnail: weddings19,
            },
            {
                original: weddings20,
                thumbnail: weddings20,
            },
            {
                original: weddings21,
                thumbnail: weddings21,
            },
            {
                original: weddings22,
                thumbnail: weddings22,
            },
            {
                original: weddings23,
                thumbnail: weddings23,
            },
            {
                original: weddings24,
                thumbnail: weddings24,
            },
            {
                original: weddings25,
                thumbnail: weddings25,
            },
            {
                original: weddings26,
                thumbnail: weddings26,
            }
        ]
    } else if(gallery === "products"){
        images = [
            {
                original: products1,
                thumbnail: products1,
            },
            {
                original: products2,
                thumbnail: products2,
            },
            {
                original: products3,
                thumbnail: products3,
            },
            {
                original: products4,
                thumbnail: products4,
            },
            {
                original: products5,
                thumbnail: products5,
            },
            {
                original: products6,
                thumbnail: products6,
            },
            {
                original: products7,
                thumbnail: products7,
            },
            {
                original: products8,
                thumbnail: products8,
            },
            {
                original: products9,
                thumbnail: products9,
            },
            {
                original: products10,
                thumbnail: products10,
            },
            {
                original: products11,
                thumbnail: products11,
            },
            {
                original: products12,
                thumbnail: products12,
            }
        ]
    } else if(gallery === "meetings"){
        images = [
            {
                original: meetings1,
                thumbnail: meetings1,
            },
            {
                original: meetings2,
                thumbnail: meetings2,
            },
            {
                original: meetings3,
                thumbnail: meetings3,
            },
            {
                original: meetings4,
                thumbnail: meetings4,
            },
            {
                original: meetings5,
                thumbnail: meetings5,
            },
            {
                original: meetings6,
                thumbnail: meetings6,
            },
            {
                original: meetings7,
                thumbnail: meetings7,
            },
            {
                original: meetings8,
                thumbnail: meetings8,
            },
            {
                original: meetings9,
                thumbnail: meetings9,
            },
            {
                original: meetings10,
                thumbnail: meetings10,
            },
            {
                original: meetings11,
                thumbnail: meetings11,
            },
            {
                original: meetings12,
                thumbnail: meetings12,
            },
            {
                original: meetings13,
                thumbnail: meetings13,
            },
            {
                original: meetings14,
                thumbnail: meetings14,
            },
            {
                original: meetings15,
                thumbnail: meetings15,
            },
            {
                original: meetings16,
                thumbnail: meetings16,
            },
            {
                original: meetings17,
                thumbnail: meetings17,
            }
        ]
    }


    return (
        <>
        <div className="Photography">
            <div className="gallery bg-light-green pa2 br4 fl w-100 shadow-3">
                <h1 className="dib pa2 v-top">Photography</h1>
                <div className="bg-washed-green pa2 br4 fl w-100">
                <div className="subgalleries flex justify-around">
                        <h3 className="pointer dim pa2" onClick={() => onGalleryChange("weddings")}>Weddings</h3>
                        <h3 className="pointer dim pa2" onClick={() => onGalleryChange("products")}>Products</h3>
                        <h3 className="pointer dim pa2" onClick={() => onGalleryChange("meetings")}>Meetings</h3>
                    </div>
                    <ImageGallery items={images}/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Photography;