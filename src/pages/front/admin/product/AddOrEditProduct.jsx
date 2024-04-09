import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SideBar from '../SideBar'
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../firebase-config';
import { addProductStart, updateProductStart } from '../../../../redux/actions/product.action ';



let initialState = { }
function AddOrEditProduct() {
  const { id }=useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();

  let categories = useSelector(state => state.category.categories);
  let products = useSelector(state => state.product.products);

  categories = categories.filter(category => category.status === '1')
  
  if (id) {
    let product=products.find(product=>product.id===id)
    if(product){
      initialState=product;
    }else{
      initialState = {
        name: '',
        slug: '',
        image: '',
        shortDescription: '',
        description: '',
        price: 0,
        quantity: 0,
        category: '',
        status: '0'
      
      }
    }
  }else{
    initialState = {
      name: '',
      slug: '',
      image: '',
      shortDescription: '',
      description: '',
      price: 0,
      quantity: 0,
      category: '',
      status: '0'
    
    }
  }
let [formData, setFormData] = useState(initialState)

  let {
    name, slug,image, shortDescription, description, price, quantity, category, status
  } = formData

  
  const inputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));

  };

  const submit = (event) => {
    event.preventDefault()

    if(id){
       dispatch(updateProductStart(formData,id))
    }else{
      dispatch(addProductStart(formData))
    }
    

    setTimeout(() => {
      navigate('/admin/product')
    },2000);


  }
  const uploadFile = (event) => {


    const storageRef = ref(storage, `product/${event.target.files[0].name}`);

    const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('File available at', );

          setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: downloadURL
          }));
        });
      }
    );
  }
  useEffect(() => {

  }, [id])

  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Product</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active text-white">Product</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className='row'>
            <div className='col-sm-3'>
              <SideBar />
            </div>
            <div className=' col-sm-9'>
              <div className="card">
                <div className='card-header d-flex justify-content-between'>
                  <h4>Add Product</h4>
                  <Link to="/admin/product" className='btn btn-primary text-white'>Back</Link>
                </div>
                <div className="card-body">
                  <form onSubmit={submit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="First_name"
                        name='name'
                        value={name}
                        onChange={inputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="slug" className="form-label">Slug</label>
                      <input
                        type="text"
                        className="form-control"
                        id="slug"
                        placeholder="Slug"
                        name='slug'
                        value={slug}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">Image</label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name='image'
                        // value={image}
                        onChange={uploadFile}
                      />
                      <div className='mt-2 w-25'>
                        <img className='w-50' src={image} />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="shortDescription" className="form-label">Shortcut Description</label>
                      <textarea className='form-control'
                        name='shortDescription'
                        id='shortDescription'
                        cols="30"
                        rows="3"
                        defaultValue={shortDescription}
                        onChange={inputChange}
                      >
                        
                      </textarea>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <textarea className='form-control'
                        name='description'
                        id='description'
                        cols="30"
                        rows="5"
                        defaultValue={description}
                        onChange={inputChange}>
                        
                      </textarea>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="price"
                       className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="Price"
                        name='price'
                        step="any"
                        min="0"
                        value={price}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="quantity" className="form-label">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        placeholder="Quantitye"
                        name='quantity'
                        min='1'
                        value={quantity}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">Category</label>
                      <select className='form-control'
                        id="category"
                        name='category'
                        defaultValue={category}
                        onChange={inputChange}
                      >
                        <option value="" hidden>select Category</option>
                        {
                          categories.length > 0 && categories.map((category, index) => (

                            <option value={category.name} key={index}>{category.name} </option>
                          ))
                        }
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">Status</label>
                      <select className='form-control'
                        id="status"
                        name='status'
                        defaultValue={status}
                        onChange={inputChange}
                      >
                        <option value="" hidden>select Status</option>
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>
                    </div>
                    <div className='row'>
                      <div className='col-sm-6 d-grid'>
                        <button type='submit' className='btn btn-primary text-white'>Submit</button>
                      </div>

                      <div className='col-sm-6 d-grid'>
                        <button type='reset' className='btn btn-primary text-white'>Reset</button>
                      </div>


                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddOrEditProduct