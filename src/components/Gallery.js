import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import BannerImg from './BannerImg';

export default function Gallery() {

    const [galleryImgData, setGalleryImgData] = useState([]);

    useEffect(() => {
        getGalleryImg();
    }, [])

    async function getGalleryImg() {
        try {
            const response = await fetch(`https://mysterious-wildwood-48575.herokuapp.com/galleries`);
            const data = await response.json();
            // console.log(data[0].photos);
            setGalleryImgData(data[0].photos);
        } catch (err) {
            console.log(err);
        }
    }

    const galleryImgages = galleryImgData.map(img => {
        // console.log(img);
        return (
            <div className="col-md-4 col-sm-6 gal-img" key={img.id}>
                <a href={`#${img.id}`} >
                    <img src={`${img.url}`} alt="aegis" className="img-fluid-1 mt-4" />
                </a>
            </div>

        )
    })

    // const galleryImgagesPopUp = galleryImgData.map(img => {
    //     return (
    //         <div id={`#${img.id}`} className="popup-effect" key={img.id}>
    //             <div className="popup">
    //                 <img src={`http://localhost:1337${img.url}`} alt="" className="img-fluid mt-4" />
    //                 <a className="close" href="#gallery">&times;</a>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <div>
            <BannerImg imgObj="assets/images/bg_gallery.jpg" />
            {
                galleryImgData.length
                    ?
                    <div>
                        
                        {/* <section className="inner-page-banner" id="home">
            </section> */}
                        <Breadcrumb pageTitle="Gallery" />
                        <section className="gallery py-5" id="gallery">
                            <div className="container py-md-5">
                                <h3 className="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
                                <div className="gallery-content">
                                    <div className="row">
                                        {galleryImgages}
                                        {/* <div className="col-md-4 col-sm-6 gal-img">
                                <a href="#gal1"><img src="assets/images/gallery_01.jpg" alt="aegis" className="img-fluid-1 mt-4" /></a>
                            </div>*/}
                                    </div>
                                    <div>
                                        {/* {galleryImgagesPopUp} */}
                                        {/* <div id="gal1" className="popup-effect">
                                <div className="popup">
                                    <img src="assets/images/gallery_01.jpg" alt="" className="img-fluid mt-4" />
                                    <a className="close" href="#gallery">&times;</a>
                                </div>
                            </div> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    :
                    <Loader
                        type="ThreeDots"
                        color="#f25c54"
                        height={100}
                        width={100}
                        className="text-center py-3"
                        timeout={3000} //3 secs
                    />
            }
        </div>
    )
}
