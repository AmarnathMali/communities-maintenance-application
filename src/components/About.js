import React from 'react'
import Navbar from './Navbar'
import './Style.css';

export default function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="about">About us</div>
      <div className="container">

        <div class="row justify-content-around">
          <div class="col-4">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          
            

          </div>
          <div class="col-4">
          <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>

          </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4">
          <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>

          </div>
          <div class="col-4">
          <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>

          </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4">
          <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>

          </div>
          <div class="col-4">
          <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
