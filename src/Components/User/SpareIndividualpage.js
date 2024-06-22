import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './SpareIndividual.css';
import axiosInstance from '../../Baseurl';


function SpareIndividualpage({url}) {
  const { id } = useParams()
  // console.log(id+"sparepart");
  const userid=localStorage.getItem("userid")
  // console.log(userid+"userid");


  let [Count,SetCount]=useState(1)
  const [data, setdata] = useState({})
  const [finprice, setfinprice] = useState(0)


  useEffect(() => {
    axiosInstance.post(`/viewSparePartById/${id}`)
      .then((res) => {
        // console.log(res);
        setdata(res.data.data)
        SetCount(1)
        setfinprice(res.data.data.price);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])


  // console.log(data)


// const IncrementItem = () => {
//   if (Count < data.count) { // Check if count is less than available quantity
//     SetCount(Count + 1);
//     setfinprice(parseInt(data.price) * (Count + 1)); // Update final price
//   } else {
//     alert("No more products available");
//   }
// }
// const DecrementItem = () => {
//   if (Count > 1) {
//     SetCount(Count - 1);
//     setfinprice(parseInt(data.price) * (Count - 1)); // Update final price
//   }
// }
const IncrementItem = () => {
  if (Count < data.count) { // Check if count is less than available quantity
    SetCount(Count + 1);
    const updatedPrice = parseInt(data.price) * (Count + 1);
    setfinprice(updatedPrice); // Update final price
    setplaceorder(prevState => ({ ...prevState, price: updatedPrice, Quantity: Count + 1 }));
  } else {
    alert("No more products available");
  }
}

//for passing initial values while user didnt click increment or decrement functon
useEffect(() => {
  setplaceorder(prevState => ({
    ...prevState,
    Quantity: Count,
    price: finprice
  }));
}, [Count, finprice]);

const DecrementItem = () => {
  if (Count > 1) {
    SetCount(Count - 1);
    const updatedPrice = parseInt(data.price) * (Count - 1);
    setfinprice(updatedPrice); // Update final price
    setplaceorder(prevState => ({ ...prevState, price: updatedPrice, Quantity: Count - 1 }));
  }
}


const [placeorder,setplaceorder]=useState({
  userid:userid,
  sparepartid:id,
  Quantity:Count,
  price:finprice
})

// const changefnorder = (event) => {
//   const { name, value } = event.target;
//   setplaceorder(prevState => ({ ...prevState, [name]: value, price: finprice, Quantity: Count }));
// }


const changefnorder = (event) => {
  const { name, value } = event.target;

  if (name === 'quantity') {
    SetCount(parseInt(value)); 
    setplaceorder(prevState => ({ ...prevState, [name]: parseInt(value) }));
  } else if (name === 'price') {
    setfinprice(parseInt(value)); 
    setplaceorder(prevState => ({ ...prevState, [name]: parseInt(value) })); 
  } else {
    setplaceorder(prevState => ({ ...prevState, [name]: value })); 
  }
}
const navigate=useNavigate()

const ordersubfn = (e) => {
  e.preventDefault();
  console.log(placeorder);
  axiosInstance.post(`bookSparePart`, placeorder)
    .then((res) => {
      console.log(res);
      if(res.data.status==200){
        alert("Product orderd succesfully you can pay while the product collected")
        navigate("/Sparepartslist")
      }
      else{
        alert("Product Is Unavailable")
      }
    })
    .catch((err)=>{
      console.log(err);
    })
}

  return (
   <div>
       {/* <form onSubmit={ordersubfn}> */}
      <div className="row">
     
        <div
          id="carouselExample"
          class="carousel slide col-5  "
        >
          
          <div>
            <p style={{paddingLeft:"100px",paddingTop:"20PX"}}>PartName: {data?.partName}</p>
           <img className="card-img-top spareList-img" src={`${url}/${data.img?.filename}`} alt='images' style={{margin:"40px"}}/>
           </div>
          <br /> <br /> <br /> <br />
          <div>
            <button className='spareindbuy-btn' type='submit' onClick={ordersubfn}>BUY NOW</button>
          </div>
        </div>

        <div className="col-7">
          {/* <div className="spareindprod-title">
            <h2><b>{data?.title}</b></h2>
           
          </div> */}
          <hr style={{ width: '50rem' }} />

          <div>
            {/* <p className='spareind-price'> Rs: {state.price}</p> */}
          </div>

          <hr style={{ width: '50rem' }} />


          <div>
           
            <div>

            <h6 className='spareind-dec'>Description : </h6>
             <p> {data?.description}</p>
           
            </div>
            <hr style={{ width: '50rem' }} />
            <div>
              <h6 className='spareind-spec'>Shopname:</h6>
              <p>{data.shopid?.name}</p>
            </div>
            <hr style={{ width: '50rem' }} />

            <div>
              <h6 className='spareind-spec'>Price:</h6>
              {/* <p name="price"  onChange={changefnorder}>{finprice}</p> */}
              <input type='number' name='price' value={finprice} onChange={changefnorder}  style={{border:"none"}} />            </div>
            <hr style={{ width: '50rem' }} />
            <div>
            <h6 className='spareind-spec'>Manufacturer:</h6>
             <p>{data?.manufacturer}</p> 
            </div>
            <hr style={{ width: '50rem' }} />
<div>
  <button className='spareind-btn' onClick={IncrementItem}>+</button><br/>
  {/* <p className='spareind-count' name="quantity"  onChange={changefnorder}> Spare count: {Count}</p> */}
  <input type='number'  name='quantity' value={Count} onChange={changefnorder} style={{border:"none",padding:"10px"}}/><br/>
  <button  className='spareind-btn'onClick={DecrementItem}>-</button>
 
</div>
          </div>
        </div>

       

      </div>
      {/* </form> */}
      </div>
  )}

      export default SpareIndividualpage