import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SideBar from '../SideBar';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../firebase-config';
import { ProfileEditUserStart } from '../../../../redux/actions/user.action';

function ProfileEdit() {

  const loginedUser = useSelector(state => state.user.loginedUser);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();


  let [formData, setFormData] = useState(loginedUser)
  let {
    name, email, contactNumber, image, address, city, state, country, pincode
  } = formData

  const inputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));

  };

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
        getDownloadURL
          (uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', );

            setFormData((prevState) => ({
              ...prevState,
              [event.target.name]: downloadURL
            }));
          });
      }
    );
  }
  const submit = async (event) => {
    event.preventDefault()

    dispatch(ProfileEditUserStart(formData,formData.id))
    setTimeout(() => {
      navigate('/admin/profile')
    }, 2000)

  }

  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Edit profile</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active text-white">Edit profile</li>
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

                  <h4>Edit user</h4>
                  <Link to="/admin/user/" className='btn btn-primary text-white'>Back</Link>
                </div>
                <div className="card-body">
                  <form onSubmit={submit} >
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        name='name'
                        value={name}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name='email'
                        value={email}
                        onChange={inputChange}
                        readOnly/>
                    </div>

                    
                    <div className="mb-3">
                      <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        placeholder="Contact Number"
                        name='contactNumber'
                        value={contactNumber}
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
                        onChange={uploadFile}
                      />
                      {
                        image &&
                        <div className='mt-4 w-25 '>
                          <img className="w-50" src={image} alt="" />
                        </div>
                      }
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Address"
                        name='address'
                        value={address}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="city" className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        name='city'
                        value={city}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="state" className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="state"
                        name='state'
                        value={state}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder="country"
                        name='country'
                        value={country}
                        onChange={inputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="pincode" className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pincode"
                        placeholder=""
                        name='pincode'
                        value={pincode}
                        onChange={inputChange}
                      />
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

export default ProfileEdit