import React from 'react'
import '../App.css'

export default function Carousel() {
    return (
        <div className='Carousel'>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                       <img src="https://saamarketing.co.uk/wp-content/uploads/2022/08/The-Different-Types-of-Technology-GIF.gif" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>TECHNOLOGY</h5>
                            <p>Explore and share the best Technology Blogs.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                       <img src="https://media4.giphy.com/media/8JNmK2TcgnkiZAjHcG/giphy.gif" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>FOOD</h5>
                            <p>Open & share this Food blogs, with everyone you know.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                     <img src="https://images.moneycontrol.com/static-mcnews/2022/09/Health-insurance.png?impolicy=website&width=1600&height=900" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>HEALTH</h5>
                            <p>Find science-based health information on symptoms, diagnosis, treatments, research, clinical trials and more.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                       <img src="https://ychef.files.bbci.co.uk/976x549/p02xm7qd.jpg" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>FILMS</h5>
                            <p>Films can make us sit up and take notice, learn about a new culture, experience a different perspective, or open our eyes to a world we know nothing about.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.dni.gov/files/NCSC/images/homepage_images/Safeguarding.jpg" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>SCIENCE</h5>
                            <p>The pursuit and application of knowledge and understanding of the natural and social world following a systematic methodology based on evidence.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.duncandubois.co.za/wp-content/uploads/2022/09/bigstock-History-56161577-620x423-1.jpg" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>HISTORY</h5>
                            <p>Explore the series of events or facts that is connected with somebody/something.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                       <img src="https://blog.upes.ac.in/wp-content/uploads/2020/03/digital-media.jpg" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>SOCIAL MEDIA</h5>
                            <p>Digital technology that facilitates the sharing of text and multimedia through virtual networks and communities.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
