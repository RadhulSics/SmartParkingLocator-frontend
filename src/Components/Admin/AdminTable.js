import React from 'react'
import './AdminTable.css'
import mainImg from '../../Assets/mainimg.png'
import { Link } from 'react-router-dom'
function AdminTable() {
  return (
    <div>
      <div>
          <img className='table-img' src={mainImg}  alt='mainimage'/>
        </div>
      <div className='table-main'>
        <div>
          <h1 className='table-title'>Table</h1>
          <p className='table-details'>This is a sample table</p>
        </div>
      <table className='table-table' border={1}>
          <tr>
            <th className='table-heading'>Sl</th>
            <th className='table-heading'>Item</th>
            <th className='table-heading'>Category</th>
            <th className='table-heading'>Descriptions</th>
            <th className='table-heading'>About</th>
            <th className='table-heading'>From</th>
            <th className='table-heading'>To</th>
            <th className='table-heading'>Actions</th>
          </tr>       
          <tr>
            <td className='table-data'>1</td>
            <td className='table-data'>Name</td>
            <td className='table-data'>Cat 1</td>
            <td className='table-data'>This is the great...</td>
            <td className='table-data'>Fine to do the description...</td>
            <td className='table-data'>Today</td>
            <td className='table-data'>Tomorrow</td>
            <td><Link to='/' style={{color:'black'}}>Edit</Link></td>
          </tr>
        </table>
        <div>
          <h1 className='table-title'>Table Display Update</h1>
        </div>
        <form>
          <label className='table-label'>Item</label><br/>
          <input className='table-input' type='text' placeholder='Name'></input><br/>
          <label className='table-label'>Category</label><br/>
          <input className='table-input' type='number' placeholder='Cat 1'></input><br/>
          <label className='table-label'>Category</label><br/>
          <input className='table-input1' placeholder='This is the great content Share tips on preventing loss, navigating return processes, and more '></input><br/>
          <label className='table-label'>From</label><br/>
          <input  onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
         className='table-input' type='text' placeholder='DD/MM/YY' ></input><br/>
          <label className='table-label'>To</label><br/>
          <input onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
         className='table-input' type='text' placeholder='DD/MM/YY' ></input><br/>
          <button className='table-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AdminTable