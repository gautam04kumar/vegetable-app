import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductStart } from '../../redux/actions/product.action ';
import { getCategoryStart } from '../../redux/actions/category.action';
import ProductItems from '../../components/ProductItems';


function Home() {
     const dispatch=useDispatch();
     const categories = useSelector(state => state.category.categories);
     const products =useSelector(state=>state.product.products);

 useEffect(()=>{
    
    dispatch(getCategoryStart())
 dispatch(getProductStart())
 },[categories.length,products.length])
    return (
        <>
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                            <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search" />
                                <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: "0", right: "25%" }}>Submit Now</button>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active rounded">
                                        <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End -->


        


<!-- Fruits Shop Start--> */}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-className text-center">
                        <div className="row g-4">
                            <div className="col-lg-4 text-start">
                                <h1>Our Organic Products</h1>
                            </div>
                            <div className="col-lg-8 text-end">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    <li className="nav-item">
                                        <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                            <span className="text-dark" style={{ width: "130px" }}>All Products</span>
                                        </a>
                                    </li>
                                    {
                                        categories.length >0 && categories.map((category,index)=>(
                                          <li className="nav-item" key={index}>
                                        <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                            <span className="text-dark" style={{ width: "130px" }}>{category.name}</span>
                                        </a>
                                    </li>  
                                        ))
                                    }
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {
                                                products.length>0 && products.map((product,index)=>(
                                                   <ProductItems product={product} key={index}/> 
                                                ))
                                            }
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Grapes</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Raspberries</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Oranges</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Apple</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-4" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Grapes</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Apricots</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-5" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Banana</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Raspberries</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>Oranges</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fruits Shop End-->
















<!-- Tastimonial Start --> */}
            {/* <div className="container-fluid testimonial py-5">
                <div className="container py-5">
                    <div className="testimonial-header text-center">
                        <h4 className="text-primary">Our Testimonial</h4>
                        <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                    </div>

                    
                        <OwlCarousel className='owl-theme testimonial-carousel' items={2} loop margin={10} nav dots={false}>
                            <div className="testimonial-item img-border-radius bg-light rounded p-4">
                                <div className="position-relative">
                                    <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: "30px", right: "0" }}></i>
                                    <div className="mb-4 pb-4 border-bottom border-secondary">
                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center flex-nowrap">
                                        <div className="bg-secondary rounded">
                                            <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }} alt="" />
                                        </div>
                                        <div className="ms-4 d-block">
                                            <h4 className="text-dark">Client Name</h4>
                                            <p className="m-0 pb-3">Profession</p>
                                            <div className="d-flex pe-5">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item img-border-radius bg-light rounded p-4">
                                <div className="position-relative">
                                    <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: "30px", right: "0" }}></i>
                                    <div className="mb-4 pb-4 border-bottom border-secondary">
                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center flex-nowrap">
                                        <div className="bg-secondary rounded">
                                            <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }} alt="" />
                                        </div>
                                        <div className="ms-4 d-block">
                                            <h4 className="text-dark">Client Name</h4>
                                            <p className="m-0 pb-3">Profession</p>
                                            <div className="d-flex pe-5">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item img-border-radius bg-light rounded p-4">
                                <div className="position-relative">
                                    <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: "30px", right: "0" }}></i>
                                    <div className="mb-4 pb-4 border-bottom border-secondary">
                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center flex-nowrap">
                                        <div className="bg-secondary rounded">
                                            <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }} alt="" />
                                        </div>
                                        <div className="ms-4 d-block">
                                            <h4 className="text-dark">Client Name</h4>
                                            <p className="m-0 pb-3">Profession</p>
                                            <div className="d-flex pe-5">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    

                </div>
            </div> */}
            {/* <!-- Tastimonial End --> */}





        </>
    )
}

export default Home