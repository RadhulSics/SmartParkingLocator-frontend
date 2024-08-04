import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewMap() {

    const { lat } = useParams();
    const { lon } = useParams();
    const [x,setx] = useState('')
  
    console.log(lat, lon);
    useEffect(() => {
      const ifameData = document.getElementById("iframeId");
  
    //   if (lon == 0 && lat == 0) setx(<NoMap/>);
      if (lon == 0 && lat == 0) setx('No Data');
      else
      setx( (
        <iframe
          id="iframeId"
          src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}
          height="500px"
          width="100%"
        ></iframe>
      ));
    },[]);

  return (
    <div>
      <div style={{ margin: "50px 30px" }}>
        {x}
      </div>
    </div>
  )
}

export default ViewMap
