import React from 'react'
import Navbar from './Navbar'
import img1 from './Images/Home.jpg'
import img2 from './Images/homepage.webp'

export default function Gallery() {
  return (
    <div><Navbar/>
          <div className='container-fluid'>
          <div class="row tm-mb-90 tm-gallery">

         <div className='gallery'>gallery</div>
         <div class="mt-5 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={img1} alt="Image" class="img-fluid"/>
                </figure>
          </div>
          <div class="mt-5 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={img2} alt="Image" class="img-fluid"/>
                </figure>
          </div>
          <div class="mt-5 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={img1} alt="Image" class="img-fluid"/>
                </figure>
          </div>
          <div class="mt-5 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={img1} alt="Image" class="img-fluid"/>
                </figure>
          </div>
          <div class="mt-5 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={img1} alt="Image" class="img-fluid"/>
                </figure>
          </div>
          <div class="mt-5 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure class="effect-ming tm-video-item">
                    <img src={img1} alt="Image" class="img-fluid"/>
                </figure>
          </div>


        </div>
        </div>




    </div>
  )
}
