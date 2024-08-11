import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Baseurl";
import "./Editspareparts.css";

function Editspareparts({ url }) {
  const { id } = useParams();
  const shopid=localStorage.getItem("workshopid")
  console.log(shopid);
  const [data, setdata] = useState({
    partName:"",
    description:"",
    price:"",
    shopid:shopid,
    manufacturer:"",
    count:"",
    img:""
  });

  useEffect(() => {
    axiosInstance.post(`viewSparePartById/${id}`).then((res) => {
      console.log(res);
      setdata(res.data.data);
    });
  }, []);


  const changefn=((b)=>{
    if(b.target.name === "img"){
        setdata({...data,img:b.target.files[0]});
    }else {
        setdata({...data,[b.target.name]:b.target.value})
    }
  })
  console.log(data);

const editfn=((b)=>{
    b.preventDefault()
    axiosInstance.post(`editSparePartById/${id}`,data,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
    })
    .then((res)=>{
        console.log(res);
        if(res.data.status==200){
            alert("Edited Succesfully")
        }
        else{
            alert("error")
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})
const navigate=useNavigate()

const deletefn=(()=>{
    axiosInstance.post(`deleteSparePartById/${id}`)
    .then((res)=>{
      console.log(res);
      if(res.data.status==200){
        alert("Deleted succesfully")
        navigate("/workshop-viewspareparts")
      }
      else{
        alert("error in delete")
      }
    })
    .catch((err)=>{
      console.log(err);
    })

  })

  return (
    <div className="row">
      <div
        id="carouselExample"
        class="carousel slide col-12  "
        style={{ marginLeft: "300px" }}
      >
        <hr style={{ width: "50rem" }} />

        <div>{/* <p className='spareind-price'> Rs: {state.price}</p> */}</div>

        <div>
          <div className="editspareparts">
            <h6 className="spareind-dec">PartName : </h6>
            <input type="text" name="partName" value={data.partName} onChange={changefn}/>
          </div>
          <hr style={{ width: "50rem" }} />

          <div className="editspareparts">
            <h6 className="spareind-dec">Description : </h6>
            <textarea name="description" value={data.description} onChange={changefn}/>
          </div>
          <hr style={{ width: "50rem" }} />
          <div className="editspareparts">
            <h6 className="spareind-spec">Count:</h6>
            <input type="number" name="count" value={data.count} onChange={changefn} />
          </div>
          <hr style={{ width: "50rem" }} />

          <div className="editspareparts">
            <h6 className="spareind-spec">Price:</h6>
            <input type="number" name="price" value={data.price} onChange={changefn} />
          </div>
          <hr style={{ width: "50rem" }} />
          <div className="editspareparts">
            <h6 className="spareind-spec">Manufacturer:</h6>
            <input type="text" name="manufacturer" value={data.manufacturer} onChange={changefn} />
          </div>
          <hr style={{ width: "50rem" }} />
          <div className="editspareparts">
            <h6 className="spareind-spec">Image:</h6>
            <input type="file" name="img" onChange={changefn} />
          </div>
            <button type="submit" className="btn btn-primary" style={{}} onClick={editfn}>Save Changes</button>
            <button type="submit" className="btn btn-danger" style={{}} onClick={deletefn}>Delete</button>

        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Editspareparts;
