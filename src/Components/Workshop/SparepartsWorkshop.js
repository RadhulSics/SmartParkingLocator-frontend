import React, { useState } from 'react'
import './SparepartsWorkshop.css'
import Signin_image from '../../Assets/signin_image.png'
import signUp_logo from'../../Assets/signUpbtnlogo.png'
import axiosInstance from '../../Baseurl'
import { useNavigate } from 'react-router-dom'

function SparepartsWorkshop() {

  const wid=localStorage.getItem("workshopid")
  console.log(wid);
  
  const [data,SetData]=useState({partName:'',description:'',price:'',shopid:wid,img:'null',count:'',manufacturer:''})
  const [errors, setErrors] = useState({partName:'',description:'',price:'',shopid:'null',image:'null',count:'',manufacturer:''});
  let formIsValid;

  const change=(b)=>{
    const { name, value } = b.target;
    if(b.target.name === "img"){
      // handleImageUpload(e);
      SetData({...data,img:b.target.files[0]});
  }else {
      SetData({...data,[b.target.name]:b.target.value})
  }
  console.log(data);
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
  }));

    }
    const validateField = (fieldName, value) => {
      if (!value.trim()) {
        formIsValid=false
          return `${fieldName} is required`;
      }
      return '';
    };
  
    
   
     const navigate=useNavigate()

  
  let AddItem=(a)=>{
    a.preventDefault()
    let errors = {};
       formIsValid = true;

      errors.partName= validateField('partName', data.partName);
      errors.description= validateField('description', data.description);
      errors.price= validateField('price', data.price);
      errors.count= validateField('count', data.count);
      errors.manufacturer= validateField('manufacturer', data.manufacturer);
      setErrors(errors);
      console.log(formIsValid);

      if (formIsValid) {
          console.log("data", data);
          axiosInstance.post('/addSpareParts',data,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })
      .then((res)=>{
        console.log(res)
        if(res.data.status==200){
            alert('succesfully item added')
            // navigate("/workshop-login")
            window.location.reload ("false")
           }
          
           else{
            alert('failed')
           }
       })
       .catch((error)=>{
        console.log(error)
       })
      }
  }
  
  return (
    <div className='col-8'>
      <form onSubmit={AddItem}>
        <div>
        {/* <img className="spareparts-img"src={Signin_image} alt='Signin_image'/> */}
        </div>
        
      <div className='spareparts-main'>
        <div>
          <h2 className='spareparts-head'>ADD ITEM</h2>
        </div>
        <div className='row'>
          <div className='spareparts-submain col-2'>
        <div>
          <label className='spareparts-label'>Spareparts Name</label>
          <input className='spareparts-input' type='text' placeholder='Spareparts name' value={data.partName} name='partName' onChange={change}/>
          {errors.partName&& (
                <div className="text-danger spareparts-validation">{errors.partName}</div>
              )}
        </div>
       
        <div>
          <label className='spareparts-label'>Description</label>
          <textarea className='textarea-spareparts' rows="4" cols="50" placeholder='Description' value={data.description} name='description' onChange={change}/>
          {errors.description && (
                <div className="text-danger spareparts-validation">{errors.description}</div>
              )}
         </div>
       
        <div>
          <label className='spareparts-label'>Price</label>
          <input className='spareparts-input' type='number' placeholder='Price' value={data.price} name='price' onChange={change}/>
          {errors.price && (
                <div className="text-danger spareparts-validation">{errors.price}</div>
              )}
        </div>
        <div>
        <label className='spareparts-label' >Image</label><br/>
          <input  className='spareparts-input' type='file' name='img'  onChange={change}/>
        </div>
       
     
        <div>
          <label className='spareparts-label'>Count</label>
          <input className='spareparts-input' type='number' placeholder='Count' value={data.count} name='count' onChange={change}/>
          {errors.count && (
                <div className="text-danger spareparts-validation">{errors.count}</div>
              )}
        </div>
        <div>
          <label className='spareparts-label'>Manufacturer</label>
          <input className='spareparts-input' type='text' placeholder='Manufacturer'value={data.manufacturer} name='manufacturer' onChange={change}/>
          {errors.manufacturer && (
                <div className="text-danger spareparts-validation">{errors.manufacturer}</div>
              )}
        </div>
       
       
        <div>
          <button className='spareparts-btn' type='submit'>Submit</button>
          <img className="spareparts-logo"src={signUp_logo} alt='signUp_logo'/>
        </div>
        </div>
        </div>
        </div>
        
        </form>
      
    </div>
  )
}

export default SparepartsWorkshop