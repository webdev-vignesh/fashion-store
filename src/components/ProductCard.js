import '../style/index.css';

function ProductCard() {
    return(
        <div>
            <div className="card mx-5 my-5 rounded"  style={{width: '18rem', height: 'auto'}} >
                <img  src='./images/p2.jpg' className='card-img-top p-5' alt=''></img>
                <div className='card-body'>
                    <h5 className='card-title text-dark product-name'>Dennis Lingo Men's Slim Fit Casual Shirt</h5>
                    <p className="card-text text-dark product-price">&#8377; 499</p>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-primary product-btn '><a href="##" className="text-decoration-none text-white">Buy</a></button>
                        <button className='btn btn-primary product-btn '><a href="##" className="text-decoration-none text-white">Cart</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;