import React from 'react'
import { Link } from 'react-router-dom'
import ProductItems from '../../components/ProductItems'
import { useSelector } from 'react-redux';

function Shop() {
    const categories = useSelector(state => state.category.categories);
    const products = useSelector(state => state.product.products);
    return (
        <>

            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Shop</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active text-white">Shop</li>
                </ol>
            </div>

            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Fresh fruits shop</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">

                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                {
                                                categories.length > 0 && categories.map((category, index) => (
                                                    <li key={index}>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <Link>{category.name}</Link>
                                                            <span>(3)</span>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                                
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row g-4 ">
                                        {
                                            products.length > 0 && products.map((product, index) => (
                                                <ProductItems product={product} key={index} size='4' />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fruits Shop End--> */}
        </>
    )
}

export default Shop