import React from 'react'

function Emergencyreq() {
  return (
    <div className='container'>
    <div className='col-8'>
                <div className='row' >
                    <div className='col'>
                        <h2>Emergency Requests By Users</h2>
                    </div>
    
                </div>
                 {/* {data.length ?(
              data.map((a)=>{
    
               
    
    
             return(  */}
                {/* <Link to={`/dashboard-workshop-approval/${a?._id}`} style={{textDecoration:"none",color:"black"}}> */}
                <div className='row' style={{padding:"10px"}}>
                    <div className='admin_advertiser_request' style={{ display: 'flex' }} >
    
                    {/* <img src={img}  alt='images' width='130px' height='100px'/> */}
    
                    <img src={"`${url}/${a.image?.filename}`"}  alt='images' width='130px' height='100px'/>
    
    
                        <div>
                            
                        <h4 className='row'>Shop Name : ewffrv</h4>
                        <div className='row'>
                                <div className='col-6 work-email'>
                                <p>Email :vinayaj@bd</p>
    
                                </div>
                                <div className='col-6 work-reg'>
                                <p id='arrow'>Reg No :2332323</p>
    
                                </div>
                        </div>
                        
                        </div>
                        
                    </div>
                </div>
                
                {/* </Link> */}
    {/* //       )
    //     })
    //  ) : (
    //    <div>No data available</div>
    //  )}  */}
    
    
    
    </div>
        </div>
    
  )
}

export default Emergencyreq