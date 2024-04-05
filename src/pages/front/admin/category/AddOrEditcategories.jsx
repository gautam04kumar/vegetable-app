import React, { useEffect, useLayoutEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import SideBar from '../SideBar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCategoryStart, updateCategoryStart } from '../../../../redux/actions/category.action'
import { storage } from '../../../../firebase-config'


let initialState = {
}

function AddOrEditcategories() {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  let { id } = useParams()

  const categories = useSelector(state => state.category.categories);
  let category;
  if (id) {
    category = categories.find(category => category.id === id)
 
    if (category) {
      initialState = category;
    } else {
      initialState = {
        name: '',
        image: '',
        status: '0'
      }
    }
  } else {
    initialState = {
      name: '',
      image: '',
      status: '0'
    }
  }


  let [formData, setFormData] = useState(initialState)

  let { name, image, status } = formData

  const inputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));

  };

  const submit = (event) => {
    event.preventDefault()

    if (id) {
      dispatch(updateCategoryStart(formData,id));
    } else{
      dispatch(addCategoryStart(formData));
    }


      setTimeout(() => {
        navigate('/admin/category')
      }, 2000);

  }
  const uploadFile = (event) => {


    const storageRef = ref(storage, `category/${event.target.files[0].name}`);

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
        <h1 className="text-center text-white display-6">Add Category</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active text-white">Add Category</li>
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
                  <h4>{id ? "Edit" : "Add"} Category</h4>
                  <Link to="/admin/category/" className='btn btn-primary text-white'>Back</Link>
                </div>
                <div className="card-body">
                  <form onSubmit={submit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="category name"
                        value={name}
                        name='name'

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
                        onChange={uploadFile} />
                      {
                        image &&
                        <div className='mt-4 w-25 '>
                          <img className="w-50" src={image} alt="" />
                        </div>
                      }
                    </div>
                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">Status</label>
                      <select className='form-control'
                        id="status"
                        name='status'
                        defaultValue={status}
                        onChange={inputChange}>
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


export default AddOrEditcategories