import '../style/index.css'

function HomeCarousel() {
    return(
        <>
            <div id="carouselExampleControls" className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img className='d-block w-100' style={{height: '92vh'}} src='./images/banner1.jpg' alt='banner'></img>
                        <div className='carousel-caption d-none d-md-block'>
                            <h3>Fashion for Upcoming Winter</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <button className="collection-btn">View Collections</button>
                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' data-bs-target='#carouselExampleControls' data-bs-slide='prev '>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
                <div className='carousel-indicators'>
                    <button data-bs-target='#carouselExampleControls' data-bs-slide-to='0' className="active" aria-current='true' aria-label='Slide 1'></button>
                    <button data-bs-target='#carouselExampleControls' data-bs-slide-to='1' aria-label="Slide 2"></button>
                    <button data-bs-target='#carouselExampleControls' data-bs-slide-to='2' aria-label="Slide 3"></button>
                </div>
            </div>
        </>
    )
}

export default HomeCarousel;