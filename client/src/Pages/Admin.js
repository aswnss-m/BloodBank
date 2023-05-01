import React from 'react'
import { useState } from 'react'
import "../Assets/Admin.css"
import RegisterUser from "./RegisterUser"

function Admin() {
    const [showSearch,setShowSearch] = useState(0);
    const [register,SetRegister] = useState(0);
    const [searchValue,setSearchValue] = useState(" ");
    const handleSearch = ()=>{
        console.log(searchValue); //need to change this so that it searches and shows only 
    }
  return (
    <div className='Admin'>
            {/* UPdate the navbar such that when the url has /Admin the login and cotact button should be hidden */}
            <div className="tableContainer">
                <div className="tableHeading">
                    <button className='primaryButton-invert'>All</button>
                    <span>
                    {showSearch>=1&&(
                        <input 
                        type="text"
                        name="searchTable"
                        id="searchTable"
                        placeholder='Blood Group'
                        onChange={(e)=>setSearchValue(e.target.value)
                        }/>
                    )}
                    <button onClick={()=>{
                        if (showSearch === 0){
                            setShowSearch(1)
                        }
                        else{
                            handleSearch()
                        }
                    }}
                    className='primaryButton-invert'
                    >Search</button>
                    </span>
                    <button className='primaryButton'onClick={()=>{
                        SetRegister(!register)
                    }}>+</button>
                </div>
                {
                    register&&(<RegisterUser admin={1}/>)
                }
                <div className="tableData">
                    <div className="tableTitles">
                        <span>ID</span>
                        <span>Name</span>
                        <span>Blood</span>
                        <span>Actions</span>
                    </div>
                    <div className="tableRow">
                        <p className="tableRowId">22309</p>
                        <p className="tableRowName">Aswin Lal</p>
                        <p className="tableRowBlood">A+</p>
                        <div className="tableRowButton">
                            <span className='tableViewButton'>View</span>
                            <span className='tableDeleteButton'>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Admin