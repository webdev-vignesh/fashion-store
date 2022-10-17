import '../style/index.css';
import {InputGroup,FormControl} from 'react-bootstrap';

const socialLink=[
    'fab fa-twitter',
    'fab fa-facebook-f',
    'fab fa-linkedin-in',
    'fab fa-instagram'
]

function FooterComponent() {
  return (
    <div>
        <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
            <div className="row pt-5">
                <div className="col-lg-4 col-md-6 mb-5">
                    <h2 className="text-primary mb-4">Fab Dressing</h2>
                    <p className="my-4">
                        Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
                        dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
                        stet diam duo eos rebum ipsum diam ipsum elitr.
                    </p>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <h4 className="text-primary mb-4">Newsletter</h4>
                    <form action="">
                        <InputGroup classNameName="mb-3">
                          <FormControl  placeholder="Email"/>
                          <InputGroup.Text id="basic-addon2">Submit</InputGroup.Text>
                        </InputGroup>
                    </form>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <h4 className="text-primary mb-4">Follow Us</h4>
                    <div className="d-flex justify-content-start mt-4">
                        {
                            socialLink.map((item)=>(
                                <a className="btn btn-social rounded-circle text-center mx-2 px-0"
                                style={{width: '38px',height: '38px'}} href="##"><i className={item}></i></a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5" style={{borderTop: '1px solid rgba(23, 162, 184, 0.2)' }}>
                <p className="m-0 text-center text-white">
                    &copy;<a className="text-primary text-decoration-none" href="#">Fab Dressing</a>.
                    All Rights Reserved. Designed by <span className='text-warning'>Vignesh Murugan</span> with ❤️
                </p>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent;