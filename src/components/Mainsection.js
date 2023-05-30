import React from 'react'
import './Mainsection.css'
const Mainsection = () => {
  return (
    <div>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img1.jpg" className="d-block w-100 crsl-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>First slide label</h2>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img2.jpg" className="d-block w-100 crsl-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>First slide label</h2>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img4.jpg" className="d-block w-100 crsl-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>First slide label</h2>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    </div>
  )
}


export default Mainsection;